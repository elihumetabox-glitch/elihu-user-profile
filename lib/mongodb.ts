import dns from "node:dns";
import mongoose, { type Mongoose } from "mongoose";

function getMongoDbUri(): string {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }

  return uri;
}

const MONGODB_URI = getMongoDbUri();

function configureDnsServers(): void {
  const servers = process.env.MONGODB_DNS_SERVERS
    ?.split(",")
    .map((server) => server.trim())
    .filter(Boolean);

  if (servers?.length) {
    dns.setServers(servers);
  }
}

async function resolveMongoUri(): Promise<string> {
  if (!MONGODB_URI.startsWith("mongodb+srv://")) {
    return MONGODB_URI;
  }

  const uri = new URL(MONGODB_URI);
  const resolver = new dns.promises.Resolver();
  const servers = process.env.MONGODB_DNS_SERVERS
    ?.split(",")
    .map((server) => server.trim())
    .filter(Boolean);

  if (servers?.length) {
    resolver.setServers(servers);
  }

  const records = await resolver.resolveSrv(`_mongodb._tcp.${uri.hostname}`);

  if (!records.length) {
    throw new Error(`No MongoDB SRV records found for ${uri.hostname}.`);
  }

  const credentials = uri.username || uri.password
    ? `${uri.username}:${uri.password}@`
    : "";
  const hosts = records
    .map((record) => `${record.name}:${record.port}`)
    .join(",");
  const options = new URLSearchParams(uri.searchParams);

  if (!options.has("tls")) {
    options.set("tls", "true");
  }

  return `mongodb://${credentials}${hosts}${uri.pathname}?${options.toString()}`;
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // The cache survives Next.js hot reloads in development.
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalThis.mongooseCache = cached;

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  // Reuse an in-flight connection promise to avoid duplicate connections.
  if (!cached.promise) {
    configureDnsServers();
    cached.promise = resolveMongoUri()
      .then((uri) => mongoose.connect(uri, { bufferCommands: false }))
      .catch((error: unknown) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

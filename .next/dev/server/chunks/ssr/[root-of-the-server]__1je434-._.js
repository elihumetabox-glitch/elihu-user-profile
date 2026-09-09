module.exports = [
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:https [external] (node:https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40e4fcdbe0b7256b726b34f42d16181cf021e1a2aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions/contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/contact.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/database/contact.model.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contacts",
    ()=>Contacts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value)=>emailPattern.test(value),
            message: "Provide a valid email address."
        }
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    emailSent: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
contactSchema.index({
    email: 1,
    created_at: -1
});
const Contacts = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["models"].Contacts ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["model"])("Contacts", contactSchema);
}),
"[project]/lib/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e4fcdbe0b7256b726b34f42d16181cf021e1a2aa":{"name":"sendEmail"}},"lib/actions/contact.ts",""] */ __turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$contact$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/database/contact.model.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$dist$2f$esm$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/dist/esm/nodemailer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const sendEmail = async (data)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const contact = await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$contact$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Contacts"].create({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            emailSent: false
        });
        const hasSmtpConfig = !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_RECIPIENT_EMAIL);
        if (hasSmtpConfig) {
            const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$dist$2f$esm$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || "587"),
                secure: process.env.SMTP_SECURE === "true",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });
            await transporter.sendMail({
                from: process.env.SMTP_FROM || process.env.SMTP_USER,
                to: process.env.CONTACT_RECIPIENT_EMAIL,
                subject: `New Contact Form: ${data.subject}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br />')}</p>
        `,
                replyTo: data.email
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$contact$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Contacts"].updateOne({
                _id: contact._id
            }, {
                emailSent: true
            });
        }
        return {
            success: true
        };
    } catch (e) {
        console.error("sending email failed", e);
        return {
            success: false,
            error: e instanceof Error ? e.message : "Failed to send"
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendEmail, "40e4fcdbe0b7256b726b34f42d16181cf021e1a2aa", null);
}),
"[project]/lib/mongodb.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$dns__$5b$external$5d$__$28$node$3a$dns$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:dns [external] (node:dns, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
;
function getMongoDbUri() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Please define the MONGODB_URI environment variable.");
    }
    return uri;
}
const MONGODB_URI = getMongoDbUri();
function configureDnsServers() {
    const servers = process.env.MONGODB_DNS_SERVERS?.split(",").map((server)=>server.trim()).filter(Boolean);
    if (servers?.length) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$dns__$5b$external$5d$__$28$node$3a$dns$2c$__cjs$29$__["default"].setServers(servers);
    }
}
async function resolveMongoUri() {
    if (!MONGODB_URI.startsWith("mongodb+srv://")) {
        return MONGODB_URI;
    }
    const uri = new URL(MONGODB_URI);
    const resolver = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$dns__$5b$external$5d$__$28$node$3a$dns$2c$__cjs$29$__["default"].promises.Resolver();
    const servers = process.env.MONGODB_DNS_SERVERS?.split(",").map((server)=>server.trim()).filter(Boolean);
    if (servers?.length) {
        resolver.setServers(servers);
    }
    const records = await resolver.resolveSrv(`_mongodb._tcp.${uri.hostname}`);
    if (!records.length) {
        throw new Error(`No MongoDB SRV records found for ${uri.hostname}.`);
    }
    const credentials = uri.username || uri.password ? `${uri.username}:${uri.password}@` : "";
    const hosts = records.map((record)=>`${record.name}:${record.port}`).join(",");
    const options = new URLSearchParams(uri.searchParams);
    if (!options.has("tls")) {
        options.set("tls", "true");
    }
    return `mongodb://${credentials}${hosts}${uri.pathname}?${options.toString()}`;
}
const cached = globalThis.mongooseCache ?? {
    conn: null,
    promise: null
};
globalThis.mongooseCache = cached;
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    // Reuse an in-flight connection promise to avoid duplicate connections.
    if (!cached.promise) {
        configureDnsServers();
        cached.promise = resolveMongoUri().then((uri)=>__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(uri, {
                bufferCommands: false
            })).catch((error)=>{
            cached.promise = null;
            throw error;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectToDatabase;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1je434-._.js.map
module.exports = [
"[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("mongoose-8b99e611e7552af3", () => require("mongoose-8b99e611e7552af3"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

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
(()=>{
    const e = new Error("Cannot find module 'nodemailer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            const transporter = nodemailer.createTransport({
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
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07qsy-t._.js.map
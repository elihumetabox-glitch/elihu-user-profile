module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/profile/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/profile.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            profile: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$profile$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProfile"])()
        });
    } catch (error) {
        console.error("GET /api/profile error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Unable to load profile."
        }, {
            status: 500
        });
    }
}
}),
"[project]/database/profile.model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Profile",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const profileSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    key: {
        type: String,
        required: true,
        unique: true
    },
    about: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        required: true
    },
    education: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        required: true
    },
    footer: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        required: true
    },
    skills: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        required: true
    }
}, {
    timestamps: true
});
const Profile = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["models"].Profile ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["model"])("Profile", profileSchema);
}),
"[project]/lib/actions/profile.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProfile",
    ()=>getProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$profile$2e$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/database/profile.model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profile-constants.ts [app-route] (ecmascript)");
;
;
;
async function getProfile() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$profile$2e$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Profile"].findOne({
        key: "main"
    }).select("-_id -__v").lean().exec();
    if (existing) {
        const migrated = await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$profile$2e$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Profile"].findOneAndUpdate({
            key: "main"
        }, {
            $set: {
                "footer.brand": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["profileConstants"].footer.brand
            }
        }, {
            new: true
        }).select("-_id -__v").lean().exec();
        if (!migrated) {
            throw new Error("The profile exists but could not be updated.");
        }
        return migrated;
    }
    const created = await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$profile$2e$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Profile"].create({
        key: "main",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["profileConstants"]
    });
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$database$2f$profile$2e$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Profile"].findById(created._id).select("-_id -__v").lean().exec();
    if (!result) {
        throw new Error("The profile was created but could not be read back.");
    }
    return result;
}
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/profile-constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profileConstants",
    ()=>profileConstants
]);
const profileConstants = {
    about: {
        image: "/images/profile.jpeg",
        experienceYears: "1+",
        paragraphs: [
            "I'm a passionate Full Stack Web Developer with over 1 year of experience building production-grade web applications, developing Ai generated applications. I specialize in SpringBoot (Java), Python, React, Next.js, and Node.js ecosystems as well as C# for enterprise systems.",
            "My philosophy is simple: write code that humans can read as clearly as machines can run. I care deeply about developer experience, application performance, and the people who ultimately use what I build. Whether working solo or as part of a team, I bring technical rigor and genuine curiosity to every project."
        ],
        highlights: [
            "Clean, maintainable code architecture",
            "Performance-first development approach",
            "Collaborative team player",
            "Continuous learner of new technologies"
        ],
        details: [
            {
                label: "Location",
                value: "Beau Bassin, Mauritius",
                icon: "location"
            },
            {
                label: "Email",
                value: "elihu.metabox@gmail.com",
                icon: "email"
            },
            {
                label: "Current Role",
                value: "Web Developer"
            },
            {
                label: "Availability",
                value: "Open to opportunities",
                highlight: true
            }
        ]
    },
    education: {
        degrees: [
            {
                title: "B.S.c Hons Software Engineering",
                institution: "University of Technology, Mauritius",
                period: "2025 – 2028",
                detail: "· Focus on Software Development, System Design and Software Security",
                color: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30",
                accent: "bg-blue-600 dark:bg-blue-500",
                badge: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60"
            }
        ],
        certifications: [
            {
                title: "Participation in Curtin University Hackathon",
                issuer: "Curtin University",
                year: "2025",
                credential: "",
                emoji: ""
            },
            {
                title: "Participation in Curtin University Hackathon & Charles Telfair Education",
                issuer: "Curtin University & Charles Telfair Education",
                year: "2026",
                credential: "",
                emoji: ""
            }
        ]
    },
    footer: {
        brand: "EJM",
        description: "Web Developer based Mauritius. Building modern, scalable web applications with a focus on performance and developer experience.",
        socials: [
            {
                icon: "github",
                href: "https://github.com/elihumetabox-glitch",
                label: "GitHub"
            },
            {
                icon: "linkedin",
                href: "https://linkedin.com/in/elihu-mvura",
                label: "LinkedIn"
            },
            {
                icon: "email",
                href: "mailto:elihu.metabox@gmail.com",
                label: "Email"
            }
        ],
        navGroups: [
            {
                title: "Navigation",
                links: [
                    {
                        label: "Home",
                        href: "#home"
                    },
                    {
                        label: "About",
                        href: "#about"
                    },
                    {
                        label: "Skills",
                        href: "#skills"
                    },
                    {
                        label: "Projects",
                        href: "#projects"
                    }
                ]
            },
            {
                title: "More",
                links: [
                    {
                        label: "Experience",
                        href: "#experience"
                    },
                    {
                        label: "Services",
                        href: "#services"
                    },
                    {
                        label: "GitHub",
                        href: "#github"
                    },
                    {
                        label: "Contact",
                        href: "#contact"
                    }
                ]
            }
        ],
        copyrightName: "Elihu Joseph Mvura",
        builtWith: [
            "Next.js",
            "Tailwind CSS"
        ]
    },
    skills: {
        description: "A curated set of tools and languages I use to build reliable, production-ready applications.",
        categories: [
            "All",
            "Frontend",
            "Backend",
            "Database",
            "Tools"
        ],
        items: [
            {
                name: "HTML5",
                category: "Frontend",
                color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
                emoji: "🌐",
                level: 95
            },
            {
                name: "CSS3",
                category: "Frontend",
                color: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                emoji: "🎨",
                level: 92
            },
            {
                name: "JavaScript",
                category: "Frontend",
                color: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
                emoji: "⚡",
                level: 93
            },
            {
                name: "TypeScript",
                category: "Frontend",
                color: "bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
                emoji: "🔷",
                level: 88
            },
            {
                name: "React",
                category: "Frontend",
                color: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
                emoji: "⚛️",
                level: 92
            },
            {
                name: "Next.js",
                category: "Frontend",
                color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
                emoji: "▲",
                level: 87
            },
            {
                name: "Tailwind CSS",
                category: "Frontend",
                color: "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
                emoji: "🌊",
                level: 90
            },
            {
                name: "Node.js",
                category: "Backend",
                color: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
                emoji: "🟢",
                level: 84
            },
            {
                name: "C#",
                category: "Backend",
                color: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
                emoji: "#️⃣",
                level: 75
            },
            {
                name: "ASP.NET",
                category: "Backend",
                color: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
                emoji: "🌐",
                level: 72
            },
            {
                name: "Java",
                category: "Backend",
                color: "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
                emoji: "☕",
                level: 70
            },
            {
                name: "PostgreSQL",
                category: "Database",
                color: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                emoji: "🐘",
                level: 80
            },
            {
                name: "MongoDB",
                category: "Database",
                color: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
                emoji: "🍃",
                level: 78
            },
            {
                name: "MySQL",
                category: "Database",
                color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
                emoji: "🗄️",
                level: 76
            },
            {
                name: "Git",
                category: "Tools",
                color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
                emoji: "🌿",
                level: 92
            },
            {
                name: "GitHub",
                category: "Tools",
                color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
                emoji: "🐱",
                level: 90
            },
            {
                name: "Figma",
                category: "Tools",
                color: "bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                emoji: "🎭",
                level: 72
            },
            {
                name: "Vercel",
                category: "Tools",
                color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
                emoji: "▲",
                level: 82
            }
        ]
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1u4-1z4._.js.map
export interface AboutInfo {
  image: string
  experienceYears: string
  paragraphs: string[]
  highlights: string[]
  details: {
    label: string
    value: string
    icon?: "location" | "email"
    highlight?: boolean
  }[]
}

export interface EducationInfo {
  degrees: {
    title: string
    institution: string
    period: string
    detail: string
    color: string
    accent: string
    badge: string
  }[]
  certifications: {
    title: string
    issuer: string
    year: string
    credential: string
    emoji: string
  }[]
}

export interface FooterInfo {
  brand: string
  description: string
  socials: { href: string; label: string; icon: "github" | "linkedin" | "email" }[]
  navGroups: { title: string; links: { label: string; href: string }[] }[]
  copyrightName: string
  builtWith: string[]
}

export interface SkillInfo {
  name: string
  category: "Frontend" | "Backend" | "Database" | "Tools"
  color: string
  emoji: string
  level: number
}

export interface ProfileContent {
  about: AboutInfo
  education: EducationInfo
  footer: FooterInfo
  skills: {
    description: string
    categories: ("All" | SkillInfo["category"])[]
    items: SkillInfo[]
  }
}

export const profileConstants: ProfileContent = {
  about: {
    image: "/images/profile.jpeg",
    experienceYears: "1+",
    paragraphs: [
      "I'm a passionate Full Stack Web Developer with over 1 year of experience building production-grade web applications, developing Ai generated applications. I specialize in SpringBoot (Java), Python, React, Next.js, and Node.js ecosystems as well as C# for enterprise systems.",
      "My philosophy is simple: write code that humans can read as clearly as machines can run. I care deeply about developer experience, application performance, and the people who ultimately use what I build. Whether working solo or as part of a team, I bring technical rigor and genuine curiosity to every project.",
    ],
    highlights: [
      "Clean, maintainable code architecture",
      "Performance-first development approach",
      "Collaborative team player",
      "Continuous learner of new technologies",
    ],
    details: [
      { label: "Location", value: "Beau Bassin, Mauritius", icon: "location" },
      { label: "Email", value: "elihu.metabox@gmail.com", icon: "email" },
      { label: "Current Role", value: "Web Developer" },
      { label: "Availability", value: "Open to opportunities", highlight: true },
    ],
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
        badge: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60",
      },
    ],
    certifications: [
      {
        title: "Participation in Curtin University Hackathon",
        issuer: "Curtin University",
        year: "2025",
        credential: "",
        emoji: "",
      },
      {
        title: "Participation in Curtin University Hackathon & Charles Telfair Education",
        issuer: "Curtin University & Charles Telfair Education",
        year: "2026",
        credential: "",
        emoji: "",
      },
    ],
  },
  footer: {
    brand: "EJM",
    description: "Web Developer based Mauritius. Building modern, scalable web applications with a focus on performance and developer experience.",
    socials: [
      { icon: "github", href: "https://github.com/elihumetabox-glitch", label: "GitHub" },
      { icon: "linkedin", href: "https://linkedin.com/in/elihu-mvura", label: "LinkedIn" },
      { icon: "email", href: "mailto:elihu.metabox@gmail.com", label: "Email" },
    ],
    navGroups: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "Experience", href: "#experience" },
          { label: "Services", href: "#services" },
          { label: "GitHub", href: "#github" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    copyrightName: "Elihu Joseph Mvura",
    builtWith: ["Next.js", "Tailwind CSS"],
  },
  skills: {
    description: "A curated set of tools and languages I use to build reliable, production-ready applications.",
    categories: ["All", "Frontend", "Backend", "Database", "Tools"],
    items: [
      { name: "HTML5", category: "Frontend", color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800", emoji: "🌐", level: 95 },
      { name: "CSS3", category: "Frontend", color: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800", emoji: "🎨", level: 92 },
      { name: "JavaScript", category: "Frontend", color: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800", emoji: "⚡", level: 93 },
      { name: "TypeScript", category: "Frontend", color: "bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800", emoji: "🔷", level: 88 },
      { name: "React", category: "Frontend", color: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800", emoji: "⚛️", level: 92 },
      { name: "Next.js", category: "Frontend", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700", emoji: "▲", level: 87 },
      { name: "Tailwind CSS", category: "Frontend", color: "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800", emoji: "🌊", level: 90 },
      { name: "Node.js", category: "Backend", color: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800", emoji: "🟢", level: 84 },
      { name: "C#", category: "Backend", color: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800", emoji: "#️⃣", level: 75 },
      { name: "ASP.NET", category: "Backend", color: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800", emoji: "🌐", level: 72 },
      { name: "Java", category: "Backend", color: "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800", emoji: "☕", level: 70 },
      { name: "PostgreSQL", category: "Database", color: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800", emoji: "🐘", level: 80 },
      { name: "MongoDB", category: "Database", color: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800", emoji: "🍃", level: 78 },
      { name: "MySQL", category: "Database", color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800", emoji: "🗄️", level: 76 },
      { name: "Git", category: "Tools", color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800", emoji: "🌿", level: 92 },
      { name: "GitHub", category: "Tools", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700", emoji: "🐱", level: 90 },
      { name: "Figma", category: "Tools", color: "bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800", emoji: "🎭", level: 72 },
      { name: "Vercel", category: "Tools", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700", emoji: "▲", level: 82 },
    ],
  },
}

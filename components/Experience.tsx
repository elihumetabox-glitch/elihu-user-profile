const experiences = [
  {
    number: '01',
    title: 'Web Developer Intern',
    company: 'MetaBox',
    location: 'Port Louis, Mauritius',
    period: 'Sept 2026 – Present',
    type: 'Full-time',
    description:
      'Web development of a enterprise system. Used Next.js and MongoDB, and other technological stacks',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    number: '02',
    title: 'Frontend Developer',
    company: 'MetaBox',
    location: 'Port Louis, Mauritius',
    period: 'Sept 2026 – present',
    type: 'Full-time',
    description:
      'Built and maintained a React-based design systems.',
    tech: ['React', 'TypeScript', 'Figma'],
  },

]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 04</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
            A chronological record of the roles and teams that shaped my engineering practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — visible on md+ */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-10 md:space-y-0">
            {experiences.map((exp, i) => (
              <div key={exp.number} className="relative md:grid md:grid-cols-[120px_1fr] md:gap-8 items-start md:mb-12 last:mb-0">
                {/* Timeline number + dot */}
                <div className="hidden md:flex flex-col items-center gap-3 pt-1">
                  <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tabular-nums">{exp.period.split('–')[0].trim()}</div>
                  <div className="relative z-10 w-4 h-4 rounded-full border-2 border-teal-500 dark:border-teal-400 bg-white dark:bg-zinc-950 shadow-md" />
                </div>

                {/* Content card */}
                <div className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-7 transition-all duration-200 hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-lg hover:shadow-teal-500/5 ${i === 0 ? 'border-l-2 border-l-teal-500 dark:border-l-teal-400' : ''}`}>
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 hidden sm:inline">{exp.number}</span>
                        <h3 className="font-display text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                          {exp.title}
                        </h3>
                        {i === 0 && (
                          <span className="px-2 py-0.5 bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 text-xs font-mono rounded-full">Current</span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-500">
                        <span className="font-semibold text-zinc-700 dark:text-zinc-400">{exp.company}</span>
                        <span className="hidden sm:inline opacity-40">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 whitespace-nowrap">{exp.period}</span>
                      <span className="text-xs px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 rounded-lg font-mono">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-sm md:text-base">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

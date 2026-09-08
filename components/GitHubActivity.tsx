"use client";

import { Github } from './Icons'
import { useMemo } from 'react'

const languages = [
  { name: 'TypeScript', pct: 42, color: 'bg-sky-500' },
  { name: 'JavaScript', pct: 28, color: 'bg-yellow-400' },
  { name: 'CSS', pct: 14, color: 'bg-blue-500' },
  { name: 'Python', pct: 9, color: 'bg-green-500' },
  { name: 'Other', pct: 7, color: 'bg-zinc-400' },
]

const repos = [
  { name: 'Strain Engineering', stars: 312, forks: 48, lang: 'HTLM/CSS, JavaScript', desc: 'Website for a consultant company' },
  { name: 'BetRacing365', stars: 189, forks: 31, lang: 'Java', desc: 'Full-stack desktop application' },
  { name: 'MedicClinic', stars: 247, forks: 52, lang: 'Java', desc: 'Full stack desktop application' },
  { name: 'Guardian Angel Mobile App', stars: 156, forks: 29, lang: 'TypeScript', desc: 'Social awareness and recovery assistant' },
]

/*function ContributionGraph() {
  const weeks = 26
  const days = 7

  const cells = useMemo(() => {
    const grid: number[][] = []
    for (let w = 0; w < weeks; w++) {
      const week: number[] = []
      for (let d = 0; d < days; d++) {
        const r = Math.random()
        week.push(r < 0.35 ? 0 : r < 0.55 ? 1 : r < 0.72 ? 2 : r < 0.87 ? 3 : 4)
      }
      grid.push(week)
    }
    return grid
  }, [])

  const intensityClass = (v: number) => {
    if (v === 0) return 'bg-zinc-100 dark:bg-zinc-800'
    if (v === 1) return 'bg-teal-200 dark:bg-teal-900'
    if (v === 2) return 'bg-teal-400 dark:bg-teal-700'
    if (v === 3) return 'bg-teal-500 dark:bg-teal-500'
    return 'bg-teal-600 dark:bg-teal-400'
  }

  return (
    <div className="flex gap-1 overflow-x-auto pb-1">
      {cells.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {week.map((val, di) => (
            <div
              key={di}
              title={`${val} contribution${val !== 1 ? 's' : ''}`}
              className={`w-3 h-3 rounded-sm ${intensityClass(val)} flex-shrink-0`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}*/

export default function GitHubActivity() {
  return (
    <section id="github" className="py-24 md:py-32 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 07</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-3">
            GitHub Activity
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            An open source contributor with consistent activity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: profile + stats */}
          <div className="space-y-5">
            {/* Profile card */}
            <div className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-zinc-200 flex-shrink-0">
                <img
                  src="/images/pfp.jpeg"
                  alt="Elihu Joseph"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">elihumetabox-glitch</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-500">Beau Bassin, Mauritius</div>
                <a
                  href="https://github.com/elihumetabox-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 hover:underline mt-1"
                >
                  <Github size={12} /> github.com/elihumetabox-glitch
                </a>
              </div>
            </div>

            {/* Stats */}
            {[
              { label: 'Repositories', value: '3', sub: '3' },
              { label: 'Contributions', value: '2', sub: 'in 2025/26'},
            ].map((s) => (
              <div key={s.label} className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4">
                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-1">{s.label}</div>
                <div className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">{s.value}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500">{s.sub}</div>
              </div>
            ))}

            {/* Languages */}
            <div className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4">
              <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-3">Top Languages</div>
              {/* Bar */}
              <div className="flex rounded-full overflow-hidden h-2 mb-3 gap-px">
                {languages.map((l) => (
                  <div key={l.name} className={`${l.color}`} style={{ width: `${l.pct}%` }} />
                ))}
              </div>
              <div className="space-y-1.5">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">{l.name}</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{l.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contribution graph + repos */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contribution graph */}
            <div className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-6">
              <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-4">Contribution Activity — 2024</div>

              <div className="flex items-center justify-end gap-2 mt-3">
                <span className="text-xs text-zinc-400 dark:text-zinc-600">Less</span>
                {[0, 1, 2, 3, 4].map((v) => (
                  <div key={v} className={`w-3 h-3 rounded-sm ${
                    v === 0 ? 'bg-zinc-100 dark:bg-zinc-800'
                    : v === 1 ? 'bg-teal-200 dark:bg-teal-900'
                    : v === 2 ? 'bg-teal-400 dark:bg-teal-700'
                    : v === 3 ? 'bg-teal-500 dark:bg-teal-500'
                    : 'bg-teal-600 dark:bg-teal-400'
                  }`} />
                ))}
                <span className="text-xs text-zinc-400 dark:text-zinc-600">More</span>
              </div>
            </div>

            {/* Popular repos */}
            <div>
              <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-3">Popular Repositories</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={`https://github.com/elihumetabox-glitch/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 hover:border-teal-300 dark:hover:border-teal-700 rounded-2xl p-4 group transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Github size={14} className="text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                      <span className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{repo.name}</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-3 leading-relaxed">{repo.desc}</p>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 dark:text-zinc-600">
                      <span>⭐ {repo.stars}</span>
                      <span>🍴 {repo.forks}</span>
                      <span className="ml-auto">{repo.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

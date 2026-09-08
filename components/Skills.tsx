"use client";

import { useState } from 'react'
import { useProfile } from '@/lib/use-profile'
import type { SkillInfo } from '@/lib/profile-constants'

type Category = 'All' | SkillInfo['category']

export default function Skills() {
  const [active, setActive] = useState<Category>('All')
  const { skills } = useProfile()

  const filtered = active === 'All' ? skills.items : skills.items.filter((s) => s.category === active)

  return (
    <section id="skills" className="py-24 md:py-32 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 02</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
            {skills.description}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skills.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-colors ${
                active === cat
                  ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-300 dark:hover:border-teal-700 rounded-2xl p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-2xl mb-3">{skill.emoji}</div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">{skill.name}</div>
              <div className={`inline-block text-xs px-2 py-0.5 rounded-full border font-mono ${skill.color}`}>
                {skill.category}
              </div>
              {/* Proficiency bar */}
              <div className="mt-3 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 dark:bg-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

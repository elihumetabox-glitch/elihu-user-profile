"use client";

import { useEffect, useState } from 'react'
import { Github, ExternalLink } from './Icons'
import type { ProjectDoc } from "@/database/projects.model";


type Filter = 'All' | 'Frontend' | 'Full Stack' | 'Backend'

const filters: Filter[] = ['All', 'Frontend', 'Full Stack', 'Backend']

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')
  const [projects, setProjects] = useState<ProjectDoc[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadProjects() {
      try {
        const response = await fetch('/api/events', { cache: 'no-store' })
        const payload = await response.json() as {
          events?: { projects?: ProjectDoc[] }
          error?: string
        }

        if (!response.ok) {
          throw new Error(payload.error ?? 'Unable to load projects.')
        }

        if (!cancelled) {
          setProjects(payload.events?.projects ?? [])
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load projects.')
        }
      }
    }

    void loadProjects()

    return () => {
      cancelled = true
    }
  }, [])

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 03</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-3">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              A selection of work I am proud of — production apps and open-source tools.
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-colors ${
                  active === f
                    ? 'bg-teal-600 dark:bg-teal-500 text-white'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
            <article
              key={project.title}
              className="group bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/80 rounded-3xl overflow-hidden hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-teal-600/90 dark:bg-teal-500/90 backdrop-blur-sm text-white text-xs font-mono font-semibold rounded-lg">
                    Featured
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-zinc-900/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-teal-600/90 backdrop-blur-sm text-white rounded-xl text-sm font-semibold hover:bg-teal-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 text-xs font-mono px-2 py-0.5 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer links */}
                <div className="flex items-center gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700 mx-1" />
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

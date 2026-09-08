"use client";

import { useEffect, useState } from 'react'
import type { ServicesModel } from '@/database/services.model'
import { Code2, Database, Monitor, Server, Settings, Zap } from '@/components/Icons'

const icons = { Code2, Database, Monitor, Server, Settings, Zap }
type IconName = keyof typeof icons

interface EventsResponse {
  events?: {
    services?: ServicesModel[]
  }
  error?: string
}

export default function Services() {
  const [services, setServices] = useState<ServicesModel[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadServices() {
      try {
        const response = await fetch('/api/events', { cache: 'no-store' })
        const payload = await response.json() as EventsResponse

        if (!response.ok) {
          throw new Error(payload.error ?? 'Unable to load services.')
        }

        if (!cancelled) {
          setServices(payload.events?.services ?? [])
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load services.')
        }
      }
    }

    void loadServices()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 06</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-3">
            What I Can Do
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
            From an initial idea to a deployed, maintained product — I can help at every stage.
          </p>
        </div>

        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
            const Icon = icons[service.icon as IconName] ?? Monitor

            return (
            <div
              key={service.title}
              className={`group border-2 ${service.accent} rounded-3xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-default`}
            >
              <div className={`w-11 h-11 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {service.title}              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                    <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

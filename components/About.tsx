 "use client";

import { MapPin, Mail, Check } from './Icons'
import { useProfile } from '@/lib/use-profile'

export default function About() {
  const { about } = useProfile()

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 01</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <div className="relative w-full max-w-sm mb-8 lg:mb-0 mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={about.image}
                  alt="Elihu J"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-5 -right-5 bg-teal-600 dark:bg-teal-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-3xl font-bold">{about.experienceYears}</div>
                <div className="text-sm opacity-90">Years of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
              {about.paragraphs[0]}
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              {about.paragraphs[1]}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Check size={12} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {about.details.map((item) => {
                const Icon = item.icon === "location" ? MapPin : item.icon === "email" ? Mail : null
                return (
                <div key={item.label} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800">
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className={`text-sm font-medium ${item.highlight ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-800 dark:text-zinc-200'} flex items-center gap-1.5`}>
                    {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />}
                    {Icon && <Icon size={13} className="text-zinc-400" />}
                    {item.value}
                  </div>
                </div>
                )
              })}
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-xl transition-colors text-sm">
              More About Me
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

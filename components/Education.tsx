"use client";

import { GraduationCap, Check } from './Icons'
import { useProfile } from '@/lib/use-profile'

export default function Education() {
  const { education } = useProfile()

  return (
    <section id="education" className="py-24 md:py-32 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 05</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2">
            Education & Certifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Degree */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-5">Academic</h3>
            {education.degrees.map((edu) => (
              <div key={edu.title} className={`relative border-2 ${edu.color} rounded-3xl p-7`}>
                <div className={`absolute -top-3.5 left-6 p-2 rounded-xl ${edu.accent} text-white`}>
                  <GraduationCap size={18} />
                </div>
                <div className="mt-3">
                  <h4 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{edu.title}</h4>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium mb-1">{edu.institution}</div>
                  <div className="font-mono text-sm text-zinc-500 dark:text-zinc-500 mb-4">{edu.period}</div>
                  <div className={`inline-block px-3 py-1.5 rounded-xl text-xs font-medium ${edu.badge}`}>
                    {edu.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-5">Certifications</h3>
            <div className="space-y-3">
              {education.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 hover:border-teal-300 dark:hover:border-teal-700 transition-colors group"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-xl rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-teal-300 dark:group-hover:border-teal-700 transition-colors">
                    {cert.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 truncate">{cert.title}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{cert.issuer} · {cert.year}</div>
                    <div className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mt-1">{cert.credential}</div>
                  </div>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Check size={10} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

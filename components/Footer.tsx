"use client";

import { Github, LinkedIn, Mail } from './Icons'
import { useProfile } from '@/lib/use-profile'

export default function Footer() {
  const { footer } = useProfile()
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-zinc-950 dark:bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-semibold text-white mb-3">
              {footer.brand}<span className="text-teal-400">.</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-5 max-w-sm">
              {footer.description}
            </p>
            <div className="flex items-center gap-2">
              {footer.socials.map(({ icon, href, label }) => {
                const Icon = icon === "github" ? Github : icon === "linkedin" ? LinkedIn : Mail
                return (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:text-teal-400 hover:border-teal-800 transition-colors"
                >
                  <Icon size={16} />
                </a>
                )
              })}
            </div>
          </div>

          {/* Nav columns */}
          {footer.navGroups.map((group) => (
            <div key={group.title}>
              <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-4">{group.title}</div>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                      className="text-sm text-zinc-500 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <div>© {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            Built with
            <span className="text-zinc-400 font-mono">{footer.builtWith[0]}</span>
            <span className="opacity-40">&</span>
            <span className="text-teal-600 font-mono">{footer.builtWith[1]}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client";

import { Github, LinkedIn, Mail, Download, ArrowDown } from './Icons'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-stone-50 dark:bg-zinc-950 pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/8 dark:bg-teal-400/6 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-72 h-72 rounded-full bg-sky-500/6 dark:bg-sky-400/4 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-teal-400/6 dark:bg-teal-300/4 blur-3xl" />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.04]" >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-900 dark:text-zinc-100" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="order-2 lg:order-1">
            {/* Availability badge */}


            {/* Main heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-zinc-900 dark:text-zinc-50 mb-6">
              {"Hi, I'm"}{' '}
              <span className="text-teal-600 dark:text-teal-400">Elihu Joseph Mvura</span>
              {','}<br />
              a Web Developer.
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl">
              I build modern, scalable, and responsive web applications that solve real problems. Passionate about clean code, intuitive interfaces, and developer experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={() => handleScroll('#projects')}
                className="px-6 py-3 font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 rounded-xl transition-colors shadow-lg shadow-teal-600/20 dark:shadow-teal-500/15"
              >
                View My Work
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors">
                <Download size={16} />
                Download CV
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mb-12">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mr-1">/ FIND ME</span>
              {[
                { icon: Github, href: 'https://github.com/elihumetabox-glitch/nextjsap', label: 'GitHub' },
                { icon: LinkedIn, href: 'https://linkedin.com/in/elihu-mvura', label: 'LinkedIn' },
                { icon: Mail, href: 'elihu.metabox.gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-zinc-500 dark:text-zinc-500 hover:text-teal-600 dark:hover:text-teal-400 border border-zinc-200 dark:border-zinc-800 hover:border-teal-300 dark:hover:border-teal-700 rounded-xl transition-colors bg-white dark:bg-zinc-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '5+', label: 'Projects Deployed' },
                { number: '7+', label: 'Technology Stacks' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">{s.number}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: avatar and decorative elements */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative orbit ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-teal-300/40 dark:border-teal-700/40 scale-110 animate-spin" style={{ animationDuration: '30s' }} />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl shadow-teal-500/10 bg-zinc-200">
                <img
                  src="/images/pfp.jpeg"
                  alt="Elihu Mvura - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech badges */}

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

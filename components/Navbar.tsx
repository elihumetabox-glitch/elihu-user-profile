"use client";

import { useEffect, useState } from "react";
import { Github, LinkedIn, Menu, X } from "./Icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".section-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <>
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm'
                    : 'bg-transparent'
            }`}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
            {/* Logo */}
            <a
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNav('#home') }}
                className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight flex-shrink-0"
            >
              Elihu Joseph Mvura<span className="text-teal-600 dark:text-teal-400">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                      className="px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {link.label}
                  </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                  href="https://linkedin.com/in/elihu-mvura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  aria-label="LinkedIn"
              >
                <LinkedIn size={18} />
              </a>

              <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white rounded-xl transition-colors"
              >
                {"Let's Talk"}
              </a>

              <button
                  className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <div
            className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
                mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
          />
          <div
              className={`absolute top-0 right-0 bottom-0 w-72 bg-stone-50 dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col transition-transform duration-300 ${
                  mobileOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex items-center justify-between mb-10">
            <span className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              EJM<span className="text-teal-600 dark:text-teal-400">.</span>
            </span>
              <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                      className="px-4 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
              <a href="https://github.com/elihumetabox-glitch" target="_blank" rel="noopener noreferrer" className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/elihu-mvura" target="_blank" rel="noopener noreferrer" className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                <LinkedIn size={20} />
              </a>
              <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                  className="ml-auto px-5 py-2.5 text-sm font-semibold bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white rounded-xl transition-colors"
              >
                {"Let's Talk"}
              </a>
            </div>
          </div>
        </div>
      </>
  )
}
export default Navbar

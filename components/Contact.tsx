"use client";

import {JSX, useState} from 'react'
import { Mail, MapPin, LinkedIn, Github, Send } from './Icons'
import posthog from "posthog-js";
import {sendEmail} from "@/lib/actions/contact";

function Contact({
  contactId = '',
  slug = '',
}: {
  contactId?: string
  slug?: string
} = {}): JSX.Element {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { success } = await sendEmail({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    })

    if (success) {
      setSubmitted(true)
      posthog.capture('email sent', form)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }
  }

  const inputClass =
    'w-full px-4 py-3 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-400 dark:focus:border-teal-600 transition-colors'

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-teal-600 dark:text-teal-400">/ 09</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 mt-2 mb-4 leading-tight">
            {"Let's Build Something"}<br />
            <span className="text-teal-600 dark:text-teal-400">Great Together.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Have a project in mind or just want to say hello? My inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-3xl p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Thanks for reaching out. I typically reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jordan Lee"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="exa@company.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project enquiry / Freelance opportunity"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 rounded-xl transition-colors shadow-lg shadow-teal-600/20 dark:shadow-teal-500/15"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'elihu.metabox@gmail.com',
                href: 'mailto:elihu.metabox@gmail.com',
                color: 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800',
                iconColor: 'text-teal-600 dark:text-teal-400',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Beau Bassin, Mauritius',
                href: null,
                color: 'bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700',
                iconColor: 'text-zinc-500 dark:text-zinc-400',
              },
              {
                icon: LinkedIn,
                label: 'LinkedIn',
                value: 'linkedin.com/in/elihu-mvura',
                href: 'https://linkedin.com/in/elihu-mvura',
                color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: 'github.com/elihumetabox-glitch',
                href: 'https://github.com/elihumetabox-glitch',
                color: 'bg-zinc-50 dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700',
                iconColor: 'text-zinc-700 dark:text-zinc-300',
              },
            ].map((item) => (
              <div key={item.label} className={`border ${item.color} rounded-2xl p-4 flex items-center gap-4`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} ${item.iconColor}`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`text-sm font-medium ${item.iconColor} hover:underline`}>
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="mt-auto bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                <span className="font-mono text-xs opacity-80 uppercase tracking-wider">Status</span>
              </div>
              <div className="font-display text-lg font-semibold mb-1">Available for Work</div>
              <p className="text-sm opacity-80">Open to part-time roles and select freelance projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

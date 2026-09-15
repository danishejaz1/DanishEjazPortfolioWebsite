import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:you@example.com', label: 'Email' },
]

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this up to an email service (Formspree, EmailJS, etc.)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="section-heading mb-4 text-3xl text-white sm:text-4xl"
      >
        Let's <span className="text-gradient">Connect</span>
      </motion.h2>
      <p className="mb-12 text-slate-300">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="glass-panel space-y-4 rounded-2xl p-8 text-left"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="rounded-lg border border-slate-600/40 bg-space-900/60 px-4 py-3 text-sm text-white outline-none focus:border-accent-ice"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="rounded-lg border border-slate-600/40 bg-space-900/60 px-4 py-3 text-sm text-white outline-none focus:border-accent-ice"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="w-full rounded-lg border border-slate-600/40 bg-space-900/60 px-4 py-3 text-sm text-white outline-none focus:border-accent-ice"
        />
        <button
          type="submit"
          className="glow-border w-full rounded-full bg-accent-ice/10 px-8 py-3 font-medium text-white transition hover:bg-accent-ice/20"
        >
          Send Message
        </button>
      </motion.form>

      <div className="mt-10 flex justify-center gap-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-xl text-slate-400 transition hover:text-accent-ice"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  )
}

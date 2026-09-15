import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: 'X+' },
  { label: 'Projects Shipped', value: 'X+' },
  { label: 'Technologies', value: 'X+' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="section-heading mb-12 text-2xl text-white sm:text-3xl"
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8"
        >
          <p className="leading-relaxed text-slate-300">
            {/* TODO: replace with your real bio */}
            I'm a software engineer who loves turning complex problems into clean, intuitive
            products. This is placeholder bio text — swap it out with your story, background,
            and what drives you to build things.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-6 text-center">
              <p className="font-display text-2xl text-nebula-cyan sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs text-slate-400 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

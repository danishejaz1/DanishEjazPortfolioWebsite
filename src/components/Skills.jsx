import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="section-heading mb-12 text-3xl text-white sm:text-4xl"
      >
        Tech <span className="text-gradient">Stack</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="font-display text-sm font-semibold tracking-wide text-accent-ice">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

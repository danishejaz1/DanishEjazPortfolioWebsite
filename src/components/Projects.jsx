import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="section-heading mb-12 text-3xl text-white sm:text-4xl"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:glow-border"
          >
            <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-ice/10 px-3 py-1 text-xs text-accent-ice"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.link}
                className="flex items-center gap-1 text-sm text-slate-300 transition hover:text-accent-ice"
              >
                <FiExternalLink /> Live
              </a>
              <a
                href={project.repo}
                className="flex items-center gap-1 text-sm text-slate-300 transition hover:text-accent-ice"
              >
                <FiGithub /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

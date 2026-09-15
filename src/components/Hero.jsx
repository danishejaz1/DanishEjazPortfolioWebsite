import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-display text-sm tracking-[0.3em] text-nebula-cyan uppercase"
      >
        Mission Control
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl font-bold text-white sm:text-6xl md:text-7xl"
      >
        Danish Ejaz
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
      >
        Software engineer building <span className="text-gradient font-semibold">immersive</span>,
        {' '}high-impact experiences across the web — one launch at a time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="glow-border rounded-full bg-nebula-purple/20 px-8 py-3 font-medium text-white transition hover:bg-nebula-purple/30"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-500/40 px-8 py-3 font-medium text-slate-200 transition hover:border-nebula-cyan hover:text-nebula-cyan"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="h-9 w-5 rounded-full border border-slate-500/50 p-1">
          <div className="h-2 w-full rounded-full bg-nebula-cyan" />
        </div>
      </motion.div>
    </section>
  )
}

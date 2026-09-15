export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 px-6 py-8 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Danish Ejaz. Built with React, Three.js &amp; Tailwind.
      </p>
    </footer>
  )
}

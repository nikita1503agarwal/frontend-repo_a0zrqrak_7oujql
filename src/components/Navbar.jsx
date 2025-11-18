import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Dream Oracle AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium transition-colors">
              Start free
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200/90 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium transition-colors">
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

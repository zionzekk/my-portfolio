import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary-600 dark:text-primary-400">
          TZ<span className="text-slate-800 dark:text-white">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-0.5"
          >
            Download CV
          </a>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-surface transition-colors"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download
            className="px-3 py-1.5 bg-primary-600 text-white text-xs font-semibold rounded-lg"
          >
            CV
          </a>
          <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 text-slate-600 dark:text-slate-300">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 text-slate-700 dark:text-slate-200"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

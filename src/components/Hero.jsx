import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const roles = ['Frontend Developer', 'React Enthusiast', 'UI/UX Learner', 'Problem Solver']

function useTyping(roles) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, deleting ? 40 : 90)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex, roles])

  return text
}

export default function Hero() {
  const typed = useTyping(roles)
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-300/30 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {profile.name.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-primary-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-medium mt-3 min-h-[2rem]">
            {profile.title}
          </h2>
          <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
            <span className="text-primary-600 dark:text-primary-400">I am a </span>
            {typed}
            <span className="inline-block w-[3px] h-6 bg-primary-500 ml-1 animate-blink align-middle"></span>
          </p>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Passionate about crafting clean, responsive, and user-friendly web experiences.
            I turn ideas into elegant interfaces using modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cvUrl}
              download
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-0.5"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow hover:shadow-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow hover:shadow-lg hover:text-primary-600 dark:hover:text-primary-400 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600 via-sky-500 to-cyan-400 rounded-[2rem] blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white dark:ring-slate-800 animate-float">
              <img
                src="/profile.jpg"
                alt="Tsion Zekaryas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

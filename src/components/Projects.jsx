import { ExternalLink, CheckCircle2, Briefcase, MessageCircle, GraduationCap, UtensilsCrossed } from 'lucide-react'
import { projects } from '../data/content'
import Reveal from './Reveal'

function GithubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  )
}

const iconMap = {
  Briefcase,
  MessageCircle,
  GraduationCap,
  UtensilsCrossed,
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Featured <span className="bg-gradient-to-r from-primary-600 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Briefcase
            return (
              <Reveal key={project.name} delay={i * 100} className="h-full">
              <div
                className="group flex flex-col h-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
              >
                {/* Screenshot-style header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
                  <Icon className="w-16 h-16 text-white/90 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.role && (
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-3 italic">
                      {project.role}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-primary-600 dark:hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-slate-200 dark:border-slate-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              </Reveal>
            )
          })}
        </div>
      </div>
      </Reveal>
    </section>
  )
}

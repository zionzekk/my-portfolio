import { skills } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Technical <span className="bg-gradient-to-r from-primary-600 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
            <div
              className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  )
}

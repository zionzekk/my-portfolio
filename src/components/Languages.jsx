import { languages } from '../data/content'
import Reveal from './Reveal'

export default function Languages() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 100}>
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl px-8 py-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center min-w-[200px]"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{lang.name}</p>
              <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">{lang.level}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  )
}

import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          <span className="text-primary-600 dark:text-primary-400">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{edu.school}</p>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

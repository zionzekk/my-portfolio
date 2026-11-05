import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Professional <span className="bg-gradient-to-r from-primary-600 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-slate-900"></span>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
                    {job.period}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{job.company}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

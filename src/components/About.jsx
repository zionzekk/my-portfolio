import { profile } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          About <span className="bg-gradient-to-r from-primary-600 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Professional Summary</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Computer Science graduate and Junior Front-End Developer based in Addis Ababa,
              Ethiopia. I enjoy building clean, responsive, and accessible web applications that
              deliver great user experiences.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Background</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I studied Computer Science at Haramaya University, where I gained a strong foundation
              in software development, databases, and web technologies. Through internships and
              academic projects, I have hands-on experience building full-stack applications.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Career Interests</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am particularly interested in frontend engineering, UI/UX-driven development,
              and building products that solve real-world problems for local and global communities.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Professional Goals</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My goal is to grow as a frontend developer, contribute to impactful projects, and
              continuously improve my skills in modern web technologies and best practices.
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold text-primary-600 dark:text-primary-400">404</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

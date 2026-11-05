import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function HomePage({ dark, toggleDark }) {
  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleDark = () => setDark((d) => !d)

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage dark={dark} toggleDark={toggleDark} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

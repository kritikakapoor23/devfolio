import { useEffect, useState } from 'react'

const ROLES = ['Frontend Engineer', 'React Developer', 'UI Builder']

const Hero = ({ darkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="about" className={`min-h-screen flex items-center pt-14 transition-colors duration-200 ${darkMode ? 'bg-[#080b14]' : 'bg-[#fafafa]'}`}>
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <span className={`w-2 h-2 rounded-full animate-pulse ${darkMode ? 'bg-[#6366f1]' : 'bg-indigo-500'}`} />
            <span className={`font-mono text-xs tracking-widest uppercase ${darkMode ? 'text-[#6366f1]' : 'text-indigo-500'}`}>
              available for opportunities
            </span>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4 ${darkMode ? 'text-[#f0eeff]' : 'text-gray-900'}`}>
            Kritika<br />
            <span className={darkMode ? 'text-[#6366f1]' : 'text-indigo-600'}>Kapoor</span>
          </h1>
          <p className={`text-xl md:text-2xl font-medium mb-6 h-8 ${darkMode ? 'text-[#8b8fa8]' : 'text-gray-500'}`}>
            {displayed}
            <span className={`ml-0.5 animate-pulse ${darkMode ? 'text-[#6366f1]' : 'text-indigo-500'}`}>|</span>
          </p>
          <p className={`text-sm leading-relaxed mb-10 max-w-lg ${darkMode ? 'text-[#6b7280]' : 'text-gray-500'}`}>
            I build clean, responsive web applications with React component-driven UIs, REST API integration, and end-to-end deployment. Final year B.Tech IT, Lucknow.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('projects') && document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#6366f1] hover:bg-[#4f52d6] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View projects
            </button>
            <a
              href="#"
              className={`text-sm font-medium px-6 py-3 rounded-lg border transition-colors ${darkMode ? 'border-[#2a2d45] text-[#8b8fa8] hover:border-[#6366f1] hover:text-[#e8e6f0]' : 'border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-gray-900'}`}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
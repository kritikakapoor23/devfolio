import { useState } from 'react'

const Navbar = ({ darkMode, toggleDark }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['about', 'skills', 'projects', 'contact']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
      darkMode
        ? 'bg-[#080b14]/90 border-[#1a1d30] backdrop-blur-md'
        : 'bg-white/90 border-gray-100 backdrop-blur-md'
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`font-mono text-xs transition-colors ${
                darkMode
                  ? 'text-[#6b7280] hover:text-[#e8e6f0]'
                  : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              darkMode
                ? 'border-[#1f2235] text-[#6b7280] hover:text-[#e8e6f0] hover:border-[#3d4060]'
                : 'border-gray-200 text-gray-400 hover:text-gray-700'
            }`}
          >
            {darkMode ? '☀' : '☾'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden font-mono text-xs px-2 py-1.5 rounded-lg border transition-colors ${
              darkMode
                ? 'border-[#1f2235] text-[#6b7280]'
                : 'border-gray-200 text-gray-400'
            }`}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${
          darkMode
            ? 'bg-[#080b14] border-[#1a1d30]'
            : 'bg-white border-gray-100'
        }`}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`font-mono text-sm text-left transition-colors ${
                darkMode
                  ? 'text-[#6b7280] hover:text-[#e8e6f0]'
                  : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
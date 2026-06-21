const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kritika-kapoor-22249232b', external: true },
  { label: 'GitHub', href: 'https://github.com/kritikakapoor23', external: true },
  { label: 'LeetCode', href: 'https://leetcode.com/u/kritikapoor23/', external: true },
  { label: 'Email', href: 'mailto:kritikakapoor131@gmail.com', external: false },
  { label: 'Resume', href: '#', external: false },
]

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 border-t transition-colors duration-200 ${darkMode ? 'bg-[#080b14] border-[#1a1d30]' : 'bg-[#fafafa] border-gray-100'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#3d4060]' : 'text-gray-300'}`}>contact</p>
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-[#f0eeff]' : 'text-gray-900'}`}>{"Let's connect"}</h2>
        <p className={`text-sm mb-10 ${darkMode ? 'text-[#6b7280]' : 'text-gray-500'}`}>Open to frontend engineering roles. Feel free to reach out.</p>
        <div className="flex flex-wrap gap-3">
          {LINKS.map(function(link) {
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel="noreferrer"
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${darkMode ? 'border-[#1f2235] bg-[#0c0f1e] text-[#8b8fa8] hover:border-[#6366f1] hover:text-[#e8e6f0]' : 'border-gray-200 bg-white text-gray-500 hover:border-indigo-300 hover:text-gray-900'}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
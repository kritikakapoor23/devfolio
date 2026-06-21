const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-6 border-t transition-colors duration-200 ${
      darkMode ? 'bg-[#080b14] border-[#1a1d30]' : 'bg-[#fafafa] border-gray-100'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className={`font-mono text-xs ${darkMode ? 'text-[#2a2d45]' : 'text-gray-200'}`}>
          © 2026 Kritika Kapoor
        </span>
        <span className={`font-mono text-xs ${darkMode ? 'text-[#2a2d45]' : 'text-gray-200'}`}>
          built with React · deployed on Vercel
        </span>
      </div>
    </footer>
  )
}

export default Footer
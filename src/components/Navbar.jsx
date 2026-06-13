const Navbar = ({ darkMode, toggleDark, activeTab, setActiveTab }) => {
  return (
    <nav className={`px-4 md:px-8 py-3 md:py-0 md:h-14 flex flex-col md:flex-row items-center gap-3 md:gap-0 justify-between border-b ${darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'}`}>
      <div className={`flex items-center gap-2 font-medium text-sm ${darkMode ? 'text-[#e2dff8]' : 'text-gray-800'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        devfolio
      </div>
      <div className="flex gap-1 flex-wrap justify-center">
        {['Overview', 'Repositories', 'Activity', 'About'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab
                ? darkMode ? 'bg-[#1e1a30] text-[#c4bef0] font-medium' : 'bg-gray-100 text-gray-900 font-medium'
                : darkMode ? 'text-[#8b85a8] hover:text-[#c4bef0]' : 'text-gray-500 hover:text-gray-800'
            }`}>
            {tab}
          </button>
        ))}
      </div>
      <button onClick={toggleDark}
        className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
          darkMode ? 'border-[#2a2440] text-[#8b85a8] hover:text-white' : 'border-gray-200 text-gray-500 hover:text-gray-800'
        }`}>
        {darkMode ? '☀ Light' : '☾ Dark'}
      </button>
    </nav>
  )
}

export default Navbar
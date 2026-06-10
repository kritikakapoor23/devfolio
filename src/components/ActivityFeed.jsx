const langColors = {
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  TypeScript: '#3178c6',
}

const LanguageBreakdown = ({ repos, darkMode }) => {
  const langCount = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1
    }
    return acc
  }, {})

  const total = Object.values(langCount).reduce((a, b) => a + b, 0)
  const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1])

  return (
    <div>
      <h2 className={`text-xs font-medium uppercase tracking-widest mb-4 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
        Language breakdown
      </h2>
      <div className={`border rounded-xl p-5 flex flex-col gap-4 ${darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'}`}>
        <div className="flex h-2 rounded-full overflow-hidden">
          {sorted.map(([lang, count]) => (
            <div
              key={lang}
              style={{
                width: `${Math.round((count / total) * 100)}%`,
                background: langColors[lang] || '#9f7aea'
              }}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {sorted.map(([lang, count]) => (
            <div key={lang} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: langColors[lang] || '#9f7aea' }} />
              <span className={`text-xs ${darkMode ? 'text-[#8b85a8]' : 'text-gray-500'}`}>{lang}</span>
              <span className={`text-xs ${darkMode ? 'text-[#4a4560]' : 'text-gray-400'}`}>
                {Math.round((count / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageBreakdown
const langColors = {
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  TypeScript: '#3178c6',
}

const RepoCard = ({ repo, darkMode }) => {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer"
      className={`border rounded-xl p-4 flex flex-col gap-3 hover:border-purple-600 transition-colors ${
        darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200 hover:shadow-sm'
      }`}>
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-purple-400">{repo.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={darkMode ? '#4a4560' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
      <p className={`text-xs leading-relaxed line-clamp-2 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
        {repo.description || 'No description provided'}
      </p>
      <div className="flex items-center gap-4">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: langColors[repo.language] || '#9f7aea' }} />
            <span className={`text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>{repo.language}</span>
          </div>
        )}
        <div className={`flex items-center gap-1 text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
          <span>★ {repo.stargazers_count}</span>
        </div>
        <div className={`flex items-center gap-1 text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
          <span>⑂ {repo.forks_count}</span>
        </div>
      </div>
    </a>
  )
}

export default RepoCard
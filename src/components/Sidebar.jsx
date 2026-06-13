const Sidebar = ({ profile, darkMode }) => {
  const learning = ['LangChain', 'LangGraph', 'FastAPI']
  const stack = ['React', 'Tailwind', 'Python', 'Java']

  return (
    <aside className={`w-full md:w-56 md:min-h-screen border-b md:border-b-0 md:border-r p-4 md:p-6 flex flex-col gap-6 ${
      darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'
    }`}>
      <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3">
        <img src={profile.avatar_url} alt="avatar"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-purple-700 shrink-0" />
        <div className="text-left md:text-center">
          <p className={`text-sm font-medium ${darkMode ? 'text-[#e2dff8]' : 'text-gray-800'}`}>
            {profile.name || profile.login}
          </p>
          <p className={`text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
            @{profile.login}
          </p>
          {profile.bio && (
            <p className={`text-xs leading-relaxed mt-1 hidden md:block ${darkMode ? 'text-[#8b85a8]' : 'text-gray-500'}`}>
              {profile.bio}
            </p>
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <p className={`text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#4a4560]' : 'text-gray-400'}`}>
          Currently learning
        </p>
        <div className="flex flex-wrap gap-2">
          {learning.map(t => (
            <span key={t} className={`text-xs px-2 py-1 rounded border text-purple-400 ${
              darkMode ? 'bg-[#1e1a30] border-[#3d3560]' : 'bg-purple-50 border-purple-200'
            }`}>{t}</span>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <p className={`text-xs uppercase tracking-widest mb-3 ${darkMode ? 'text-[#4a4560]' : 'text-gray-400'}`}>
          Tech stack
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map(t => (
            <span key={t} className={`text-xs px-2 py-1 rounded border text-purple-400 ${
              darkMode ? 'bg-[#1e1a30] border-[#3d3560]' : 'bg-purple-50 border-purple-200'
            }`}>{t}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
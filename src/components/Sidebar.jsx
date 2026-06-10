const Sidebar = ({ profile, darkMode }) => {
  const learning = ['LangChain', 'LangGraph', 'FastAPI']
  const stack = ['React', 'Tailwind', 'Python', 'Java']

  return (
    <aside className={`w-56 min-h-screen border-r p-6 flex flex-col gap-6 ${
      darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'
    }`}>
      <div className="flex flex-col items-center gap-3">
        <img src={profile.avatar_url} alt="avatar"
          className="w-16 h-16 rounded-full border-2 border-purple-700" />
        <div className="text-center">
          <p className={`text-sm font-medium ${darkMode ? 'text-[#e2dff8]' : 'text-gray-800'}`}>
            {profile.name || profile.login}
          </p>
          <p className={`text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>@{profile.login}</p>
        </div>
        {profile.bio && (
          <p className={`text-xs text-center leading-relaxed ${darkMode ? 'text-[#8b85a8]' : 'text-gray-500'}`}>
            {profile.bio}
          </p>
        )}
      </div>

      <div>
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

      <div>
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
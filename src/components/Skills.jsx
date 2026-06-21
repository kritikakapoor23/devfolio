const SKILLS = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['FastAPI', 'Python'],
  Tools: ['Git', 'GitHub', 'Vite', 'REST APIs', 'Vercel'],
}

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-20 border-t transition-colors duration-200 ${
        darkMode ? 'bg-[#080b14] border-[#1a1d30]' : 'bg-[#fafafa] border-gray-100'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className={`font-mono text-xs uppercase tracking-widest mb-10 ${
          darkMode ? 'text-[#3d4060]' : 'text-gray-300'
        }`}>
          tech stack
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}>
              <p className={`font-mono text-xs mb-4 ${
                darkMode ? 'text-[#6b7280]' : 'text-gray-400'
              }`}>
                {category.toLowerCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      category === 'Frontend'
                        ? darkMode
                          ? 'border-[#6366f1]/40 text-[#a5b4fc] bg-[#6366f1]/10'
                          : 'border-indigo-200 text-indigo-600 bg-indigo-50'
                        : darkMode
                          ? 'border-[#1f2235] text-[#6b7280] bg-[#0c0f1e]'
                          : 'border-gray-200 text-gray-500 bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
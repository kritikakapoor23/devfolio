import { PROJECTS } from '../data/projects'

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 ${darkMode ? 'bg-[#0c0f1e] border-[#1a1d30] hover:border-[#6366f1]' : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-lg'}`}>
      <div className="h-[3px] w-full" style={{ background: project.accent }} />
      <div className="flex flex-col flex-1 p-6">
        <h3 className={`text-base font-semibold mb-3 ${darkMode ? 'text-[#e8e6f0]' : 'text-gray-900'}`}>
          {project.name}
        </h3>
        <p className={`text-sm leading-relaxed flex-1 mb-5 ${darkMode ? 'text-[#6b7280]' : 'text-gray-500'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(function(tag) {
            return (
              <span key={tag} className={`font-mono text-xs px-2.5 py-1 rounded-md border ${darkMode ? 'border-[#1f2235] text-[#6b7280] bg-[#080b14]' : 'border-gray-100 text-gray-400 bg-gray-50'}`}>
                {tag}
              </span>
            )
          })}
        </div>
        <div className={`flex items-center gap-4 pt-4 border-t ${darkMode ? 'border-[#1a1d30]' : 'border-gray-100'}`}>
          <a href={project.live} target="_blank" rel="noreferrer" className="text-xs font-medium" style={{ color: project.accent }}>
            Live demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className={`text-xs font-medium ${darkMode ? 'text-[#6b7280] hover:text-[#e8e6f0]' : 'text-gray-400 hover:text-gray-700'}`}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 border-t transition-colors duration-200 ${darkMode ? 'bg-[#080b14] border-[#1a1d30]' : 'bg-[#fafafa] border-gray-100'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <p className={`font-mono text-xs uppercase tracking-widest mb-10 ${darkMode ? 'text-[#3d4060]' : 'text-gray-300'}`}>projects</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map(function(project) {
            return <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
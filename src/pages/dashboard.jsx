import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import RepoCard from '../components/RepoCard'
import LanguageBreakdown from '../components/ActivityFeed'
import useGitHub from '../hooks/useGitHub'

const Dashboard = ({ darkMode, toggleDark }) => {
  const { profile, repos, loading, error } = useGitHub('kritikakapoor23')
  const [activeTab, setActiveTab] = useState('Overview')
  const [filterLang, setFilterLang] = useState('All')

  const filteredRepos = repos.filter(repo => repo.name !== 'kritikakapoor23')
  const languages = ['All', ...new Set(filteredRepos.map(r => r.language).filter(Boolean))]
  const displayRepos = filterLang === 'All'
    ? filteredRepos
    : filteredRepos.filter(r => r.language === filterLang)

  if (loading) return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#0e0c14]' : 'bg-gray-50'}`}>
      <p className="text-purple-400 text-sm">Fetching GitHub data...</p>
    </div>
  )

  if (error) return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#0e0c14]' : 'bg-gray-50'}`}>
      <p className="text-red-400 text-sm">{error}</p>
    </div>
  )

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0e0c14] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex">
        <Sidebar profile={profile} darkMode={darkMode} />
        <main className="flex-1 p-8 flex flex-col gap-8">

          {activeTab === 'Overview' && (
            <>
              <div className="grid grid-cols-4 gap-4">
                <StatCard label="Public repos" value={profile.public_repos} darkMode={darkMode} />
                <StatCard label="Followers" value={profile.followers} darkMode={darkMode} />
                <StatCard label="Following" value={profile.following} darkMode={darkMode} />
                <StatCard label="Total repos" value={filteredRepos.length} darkMode={darkMode} />
              </div>

              <div>
                <h2 className={`text-xs font-medium uppercase tracking-widest mb-4 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                  Repositories
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {filteredRepos.slice(0, 4).map(repo => (
                    <RepoCard key={repo.id} repo={repo} darkMode={darkMode} />
                  ))}
                </div>
              </div>

              <LanguageBreakdown repos={filteredRepos} darkMode={darkMode} />
            </>
          )}

          {activeTab === 'Repositories' && (
            <>
              <div className="flex items-center justify-between">
                <h2 className={`text-xs font-medium uppercase tracking-widest ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                  All repositories
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {languages.map(lang => (
                    <button key={lang}
                      onClick={() => setFilterLang(lang)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                        filterLang === lang
                          ? 'bg-purple-700 text-white'
                          : darkMode
                            ? 'bg-[#1e1a30] text-[#8b85a8] hover:text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}>
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {displayRepos.map(repo => (
                  <RepoCard key={repo.id} repo={repo} darkMode={darkMode} />
                ))}
              </div>
            </>
          )}

          {activeTab === 'Activity' && (
            <div className="max-w-2xl flex flex-col gap-4">
              <h2 className={`text-xs font-medium uppercase tracking-widest ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                Recent activity
              </h2>
              {[...filteredRepos]
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .map(repo => (
                  <div key={repo.id} className={`border rounded-xl p-4 flex items-center justify-between gap-4 ${
                    darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex flex-col gap-1 min-w-0">
                      <a href={repo.html_url} target="_blank" rel="noreferrer"
                        className="text-sm font-medium text-purple-400 hover:underline truncate">
                        {repo.name}
                      </a>
                      <span className={`text-xs truncate ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                        {repo.description || 'No description'}
                      </span>
                    </div>
                    <span className={`text-xs whitespace-nowrap shrink-0 ${darkMode ? 'text-[#4a4560]' : 'text-gray-400'}`}>
                      Updated {new Date(repo.updated_at).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                  </div>
                ))}
            </div>
          )}

          {activeTab === 'About' && (
            <div className="max-w-2xl flex flex-col gap-6">

              {/* Bio */}
              <div className={`rounded-xl p-6 border ${darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'}`}>
                <h2 className={`text-lg font-medium mb-2 ${darkMode ? 'text-[#e2dff8]' : 'text-gray-800'}`}>
                  Hey, I'm Kritika 👋
                </h2>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#8b85a8]' : 'text-gray-500'}`}>
                  Final year B.Tech IT student passionate about building things at the intersection of
                  frontend and AI. I work with React, FastAPI, and Python, and I'm currently diving deep
                  into LangChain, LangGraph, and agentic AI systems.
                </p>
              </div>

              {/* Currently working on */}
              <div className={`rounded-xl p-6 border ${darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-xs font-medium uppercase tracking-widest mb-4 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                  Currently working on
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Devfolio', desc: 'This app — a GitHub portfolio dashboard built with React and the GitHub API' },
                    { name: 'Patient Management System', desc: 'Full stack app with FastAPI backend and React frontend' },
                    { name: 'MultiMind', desc: 'A multimodal RAG system that answers queries across PDFs, images, and audio with cited sources — final year project' },
                  ].map(item => (
                    <div key={item.name} className={`flex flex-col gap-1 p-3 rounded-lg ${darkMode ? 'bg-[#0e0c14]' : 'bg-gray-50'}`}>
                      <span className="text-sm font-medium text-purple-400">{item.name}</span>
                      <span className={`text-xs ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning roadmap */}
              <div className={`rounded-xl p-6 border ${darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-xs font-medium uppercase tracking-widest mb-4 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>
                  Learning roadmap
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { topic: 'FastAPI', status: 'In progress' },
                    { topic: 'DSA in Java', status: 'Ongoing' },
                  ].map(item => (
                    <div key={item.topic} className="flex items-center justify-between">
                      <span className={`text-sm ${darkMode ? 'text-[#8b85a8]' : 'text-gray-600'}`}>{item.topic}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
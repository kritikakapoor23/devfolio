import { useState, useEffect } from 'react'
import axios from 'axios'

const DESCRIPTIONS = {
  'Streaming-Platform-UI-project': 'Responsive streaming platform landing page with video overlay, FAQ accordion, and clean UI — built with HTML & CSS',
  'habit-tracker': 'React-based habit tracking app with streak calculation, dark mode, and localStorage persistence',
  'patient-management-system': 'Full stack patient management app with FastAPI backend and React frontend',
  'devfolio': 'GitHub portfolio dashboard with repo explorer, language breakdown, and activity feed — built with React',
}

const useGitHub = (username) => {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ])
        setProfile(profileRes.data)
        setRepos(reposRes.data.map(repo => ({
          ...repo,
          description: repo.description || DESCRIPTIONS[repo.name] || null
        })))
      } catch (err) {
        setError('Failed to fetch GitHub data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])

  return { profile, repos, loading, error }
}

export default useGitHub
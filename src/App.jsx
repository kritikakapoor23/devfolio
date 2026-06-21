import { useState } from 'react'
import Portfolio from './pages/Portfolio'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return <Portfolio darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
}

export default App
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Portfolio = ({ darkMode, toggleDark }) => {
  return (
    <div className={`transition-colors duration-200 ${
      darkMode ? 'bg-[#080b14]' : 'bg-[#fafafa]'
    }`}>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Portfolio

// import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import TechStacks from './components/TechStacks'

function App() {

  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Project/>
      <TechStacks/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App

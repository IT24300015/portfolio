import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check backend health
    const checkBackend = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
        const response = await fetch(`${apiUrl}/health`)
        if (response.ok) {
          console.log('✅ Backend is live!')
        }
      } catch (error) {
        console.log('⚠️ Backend not available yet')
      } finally {
        setIsLoading(false)
      }
    }

    checkBackend()
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  }

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

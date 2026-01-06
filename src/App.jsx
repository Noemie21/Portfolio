import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import LikeButton from './components/LikeButton'
import Chatbot from './components/Chatbot'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [easterEgg, setEasterEgg] = useState(false)

  // Theme toggle
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
    }
  }, [isDark])

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ]
    let konamiIndex = 0

    const handleKeyDown = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++
        if (konamiIndex === konamiCode.length) {
          setEasterEgg(true)
          setTimeout(() => setEasterEgg(false), 5000)
          konamiIndex = 0
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={`min-h-screen ${easterEgg ? 'rainbow-mode' : ''}`}>
      {/* Custom cursor - hidden on mobile */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar isDark={isDark} />

      {/* Theme toggle */}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

      {/* Main content */}
      <main>
        <Hero />
        <Clients />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Fixed elements */}
      <LikeButton />
      <Chatbot />

      {/* Easter egg notification */}
      <AnimatePresence>
        {easterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-gradient-to-r from-violet-600 to-pink-600 text-white 
                       px-8 py-4 rounded-2xl text-xl font-bold z-[100] shadow-2xl"
          >
            🎮 Konami Code Activated! 🌈
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Noémie Kpatenon. Built with 💜 and React.</p>
      </footer>
    </div>
  )
}

export default App

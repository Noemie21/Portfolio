import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'KeyB', 'KeyA'
]

export default function EasterEggs({ onRainbow }) {
  const [keySequence, setKeySequence] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...keySequence, e.code].slice(-10)
      setKeySequence(newSequence)

      // Check for Konami code
      if (newSequence.join(',') === KONAMI_CODE.join(',')) {
        onRainbow()
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 3000)
        setKeySequence([])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [keySequence, onRainbow])

  // Secret: click on the footer 5 times
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const handleClick = () => {
      setClickCount((prev) => {
        const newCount = prev + 1
        if (newCount >= 5) {
          onRainbow()
          setShowMessage(true)
          setTimeout(() => setShowMessage(false), 3000)
          return 0
        }
        return newCount
      })
    }

    footer.addEventListener('click', handleClick)
    return () => footer.removeEventListener('click', handleClick)
  }, [onRainbow])

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white font-bold text-lg shadow-2xl"
        >
          🎮 Easter egg unlocked! Rainbow mode! 🌈
        </motion.div>
      )}
    </AnimatePresence>
  )
}

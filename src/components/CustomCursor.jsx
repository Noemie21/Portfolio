import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, [data-cursor-hover]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 bg-violet-500 rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      >
        <div className={`w-10 h-10 border rounded-full transition-colors duration-200 ${
          isHovering ? 'border-violet-500 bg-violet-500/10' : 'border-white/30'
        }`} />
      </motion.div>

      {/* Trail effect (optional - subtle dots that follow) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="custom-cursor opacity-20"
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 150 - i * 30, 
            damping: 15 + i * 5,
            mass: 0.5 + i * 0.2
          }}
        >
          <div 
            className="w-1 h-1 bg-violet-400 rounded-full"
            style={{ opacity: 1 - i * 0.3 }}
          />
        </motion.div>
      ))}
    </>
  )
}

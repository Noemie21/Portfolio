import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, runTransaction } from 'firebase/database'

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function LikeButton() {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [confetti, setConfetti] = useState([])

  // Check if user has already liked
  useEffect(() => {
    const liked = localStorage.getItem('portfolio_liked')
    if (liked) setHasLiked(true)
  }, [])

  // Firebase real-time listener
  useEffect(() => {
    const likesRef = ref(database, 'likes')
    const unsubscribe = onValue(likesRef, (snapshot) => {
      const data = snapshot.val()
      if (data !== null) setLikes(data)
    })
    return () => unsubscribe()
  }, [])

  const generateConfetti = () => {
    const colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6']
    const newConfetti = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: (Math.random() - 0.5) * 120,
      y: -(Math.random() * 60 + 40),
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
    }))
    setConfetti(newConfetti)
    setTimeout(() => setConfetti([]), 1000)
  }

  const handleLike = () => {
    if (hasLiked) return

    setIsAnimating(true)
    setHasLiked(true)
    generateConfetti()
    localStorage.setItem('portfolio_liked', 'true')

    // Update Firebase
    const likesRef = ref(database, 'likes')
    runTransaction(likesRef, (currentLikes) => {
      return (currentLikes || 0) + 1
    })

    setTimeout(() => setIsAnimating(false), 400)
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <div className="relative">
        {/* Confetti */}
        <AnimatePresence>
          {confetti.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full pointer-events-none"
              style={{ 
                backgroundColor: particle.color,
                width: 8 * particle.scale,
                height: 8 * particle.scale,
              }}
              initial={{ x: 24, y: 24, scale: 1, opacity: 1, rotate: 0 }}
              animate={{ 
                x: 24 + particle.x, 
                y: 24 + particle.y - 60,
                scale: 0,
                opacity: 0,
                rotate: particle.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>

        {/* Like button */}
        <motion.button
          onClick={handleLike}
          className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl shadow-lg transition-all
                     ${hasLiked 
                       ? 'bg-gradient-to-br from-pink-500 to-rose-600 cursor-default' 
                       : 'glass cursor-pointer hover:shadow-xl hover:shadow-pink-500/20'
                     }`}
          whileHover={!hasLiked ? { scale: 1.1 } : {}}
          whileTap={!hasLiked ? { scale: 0.9 } : {}}
        >
          <motion.div
            animate={isAnimating ? { scale: [1, 1.4, 0.9, 1.2, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Heart
              size={26}
              className={`transition-all ${
                hasLiked ? 'text-white fill-white' : 'text-pink-400 hover:text-pink-300'
              }`}
            />
          </motion.div>
          <span className={`text-sm font-semibold ${hasLiked ? 'text-white' : 'text-muted'}`}>
            {likes}
          </span>
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!hasLiked && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 
                         px-3 py-2 card-bg rounded-xl text-sm text-muted
                         whitespace-nowrap hidden sm:block shadow-lg"
            >
              Like this portfolio? 💜
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
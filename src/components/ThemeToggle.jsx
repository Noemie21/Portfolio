import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`fixed top-2 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800 hover:bg-gray-700 shadow-violet-500/20' 
          : 'bg-white hover:bg-gray-100 shadow-gray-300'
      }`}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun size={22} className="text-yellow-400" />
        ) : (
          <Moon size={22} className="text-violet-600" />
        )}
      </motion.div>
    </motion.button>
  )
}

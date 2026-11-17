import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react'

const roles = ['AI Engineer', 'Fullstack Developer', 'Problem Solver', 'React Enthusiast']

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/Noemie21', 
    label: 'GitHub',
    gradient: 'from-violet-900/80 via-purple-900/60 to-transparent',
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/noémie-k/', 
    label: 'LinkedIn',
    gradient: 'from-blue-900/80 via-indigo-900/60 to-transparent',
  },
  { 
    icon: Mail, 
    href: 'mailto:n.kpatenon@gmail.com', 
    label: 'Email',
    gradient: 'from-emerald-900/80 via-teal-900/60 to-transparent',
  },
]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted text-lg mb-4 flex items-center gap-2">
            <span>👋</span> Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="text-heading">Noémie</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Kpatenon</span>
          </h1>

          <div className="text-2xl md:text-3xl mb-6 flex items-center gap-3">
            <span className="text-muted">I am</span>
            <span className="text-heading font-semibold">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </div>

          <p className="text-muted text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Building intelligent systems and deploying them as beautiful web applications. 
            Open to international opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#work"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/CV_Noemie_Kpatenon_AI_Engineer.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>

          {/* Small social icons for mobile */}
          <div className="flex gap-4 lg:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:scale-110 transition-transform"
              >
                <link.icon size={20} className="text-muted" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Social cards - Desktop only, glass style with gradient colors */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 hidden lg:block"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute w-40 h-48 rounded-2xl backdrop-blur-sm border border-white/10
                        bg-gradient-to-br ${link.gradient} 
                        flex items-center justify-center
                        shadow-xl hover:shadow-2xl transition-shadow`}
              style={{
                top: `${index * 90}px`,
                right: `${index * 110}px`,
                zIndex: socialLinks.length - index,
              }}
              whileHover={{ 
                scale: 1.1,
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <link.icon size={36} className="text-white/90" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#clients"
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  )
}

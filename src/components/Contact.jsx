import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Noemie21',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/noémie-k/',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Download CV',
    icon: FileDown,
    href: '/CV_Noemie_Kpatenon_AI_Engineer.pdf',
    gradient: 'from-violet-600 to-purple-800',
    download: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-400 font-mono text-sm mb-4">What's next?</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-heading">
            Let's work{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm currently looking for full-time opportunities as an AI Engineer. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>

          {/* Contact links */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download || undefined}
                className={`flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${link.gradient} 
                           text-white font-medium shadow-lg hover:shadow-xl transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:n.kpatenon@gmail.com?subject=Hello%20No%C3%A9mie"
            className="inline-flex items-center gap-2 px-10 py-4 btn-primary text-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import cozycloud from '../assets/logos/cozycloud.png'
import unlatch from '../assets/logos/unlatch.png'
import nanolab from '../assets/logos/nanolab.png'
import epitech from '../assets/logos/epitech-digital.png'
import imcas from '../assets/logos/imcas.png'

const clients = [
  { name: 'CozyCloud', logo: cozycloud, keepInvert: false },
  { name: 'Unlatch', logo: unlatch, keepInvert: true },
  { name: 'Nanolab', logo: nanolab, keepInvert: false },
  { name: 'Epitech Digital', logo: epitech, keepInvert: false },
  { name: 'IMCAS', logo: imcas, keepInvert: true },
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 border-y section-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted mb-8"
        >
          Some of <span className="text-heading font-medium">the companies I have worked for</span>
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={`h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 invert ${
                  client.keepInvert ? '' : 'hover:invert-0'
                  }`}
                />
              ) : (
                <motion.span 
                  className="text-lg md:text-xl font-semibold text-muted hover:text-heading transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {client.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

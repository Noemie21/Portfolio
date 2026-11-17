import { motion } from 'framer-motion'
import { Brain, Code, Database, Sparkles, GraduationCap, Briefcase, Rocket, Music, Plane, Globe } from 'lucide-react'

const skills = [
  {
    category: 'AI / ML',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    items: ['PyTorch', 'LangChain', 'OpenCV', 'scikit-learn', 'HuggingFace'],
  },
  {
    category: 'Frontend',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: Database,
    color: 'from-blue-500 to-cyan-600',
    items: ['Python', 'Node.js', 'PostgreSQL', 'Firebase', 'Docker'],
  },
]

const timeline = [
  {
    year: '2020-23',
    icon: GraduationCap,
    title: 'Bachelor Web Development',
    place: 'Epitech Digital',
    description: 'Fullstack training with focus on React',
  },
  {
    year: '2020-24',
    icon: Briefcase,
    title: 'Professional Experiences',
    place: 'CozyCloud, Unlatch, Nanolab, IMCAS',
    description: 'Fullstack Developer',
  },
  {
    year: '2024-25',
    icon: GraduationCap,
    title: 'Master AI',
    place: 'Polytechnique Montréal',
    description: 'Computer Vision & Deep Learning',
  },
  {
    year: 'Now',
    icon: Rocket,
    title: 'Open to Opportunities',
    place: 'Worldwide',
    description: 'Looking for AI Engineer roles',
  },
]

const funFacts = [
  { icon: Music, text: 'Music lover' },
  { icon: Plane, text: 'Travel enthusiast' },
  { icon: Globe, text: 'Open to relocate' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted mb-2">A bit</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - About text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-heading">
              <span className="gradient-text">AI Engineer</span> with a{' '}
              <span className="gradient-text">Fullstack background</span>.
            </h3>
            
            <p className="text-muted text-lg mb-8 leading-relaxed">
              I build intelligent systems and deploy them as beautiful web applications.
            </p>

            {/* Skills cards */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-bg rounded-2xl p-5 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color}`}>
                      <skill.icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-heading">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun facts */}
            <div className="flex flex-wrap gap-3 mt-8">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="fun-fact-badge"
                >
                  <fact.icon size={16} />
                  <span>{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-8 text-heading gradient-text">My Journey</h3>
            
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="timeline-line" />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="timeline-dot" />
                    
                    {/* Card */}
                    <div className="card-bg rounded-2xl p-5 ml-4 card-hover">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={18} className="text-violet-400" />
                        <h4 className="font-semibold text-heading">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted mb-1">{item.place}</p>
                      <p className="text-sm text-muted opacity-75">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

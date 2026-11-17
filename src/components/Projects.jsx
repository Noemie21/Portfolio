import { motion } from 'framer-motion'
import { Github, ExternalLink, Brain, Eye, Flower2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'DocuMind',
    subtitle: 'RAG System',
    description: 'Intelligent document Q&A system using Retrieval-Augmented Generation. Upload documents and ask questions in natural language.',
    tags: ['LangChain', 'OpenAI', 'ChromaDB', 'Python'],
    icon: Brain,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    github: 'https://github.com/Noemie21/DocuMind',
    demo: 'https://www.noemie.pro/documind/',
  },
  {
    id: 2,
    title: 'Computer Vision',
    subtitle: 'Object Detection & Tracking',
    description: 'Comprehensive CV projects: HOG vs CLIP comparison, CLIPseg vs YOLO segmentation, and DeepSORT multi-object tracking.',
    tags: ['PyTorch', 'YOLO', 'CLIP', 'DeepSORT'],
    icon: Eye,
    gradient: 'from-violet-500 via-purple-500 to-pink-500',
    github: 'https://github.com/Noemie21/Computer-Vision',
    demo: null,
  },
  {
    id: 3,
    title: 'Strawberry Ripeness',
    subtitle: 'Image Classification',
    description: 'Classify strawberry ripeness stages using K-Means clustering and ResNet18 CNN. Achieves 94.5% accuracy with AUC = 0.99.',
    tags: ['PyTorch', 'ResNet', 'K-Means', 'OpenCV'],
    icon: Flower2,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    github: 'https://github.com/Noemie21/Strawberry-Ripeness',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-muted mb-2">Selected <span className="text-heading font-medium">Works</span></p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            AI & Machine Learning Projects
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              {/* Project visual */}
              <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <motion.div
                  className={`relative aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-8 
                            flex items-center justify-center overflow-hidden group cursor-pointer`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => project.demo && window.open(project.demo, '_blank', 'noopener,noreferrer')}
                  role={project.demo ? 'link' : undefined}
                  aria-label={project.demo ? `Open the ${project.title} live demo` : undefined}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }} />
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <project.icon 
                      size={100} 
                      className="text-white/90 drop-shadow-lg" 
                    />
                  </motion.div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                                transition-opacity flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} source code`}
                        className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={28} className="text-white" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} live demo`}
                        className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={28} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Project info */}
              <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <p className="text-violet-400 font-mono text-sm mb-2">{project.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-heading">{project.title}</h3>
                <p className="text-muted text-lg mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted hover:text-heading transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={20} />
                      <span>View code</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted hover:text-heading transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

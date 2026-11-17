import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

// Pre-defined context about Noémie for the AI
const SYSTEM_CONTEXT = `You are an AI assistant on Noémie Kpatenon's portfolio website. 
You help visitors learn about her background, skills, and projects.

Key information about Noémie:
- AI Engineer with a Fullstack Developer background
- Master's in AI from Polytechnique Montréal (2024-2025)
- Bachelor in Web Development from Epitech Digital (2020-2023)
- Fullstack Developer (2020-2024) at: CozyCloud, Unlatch, Nanolab, Epitech Digital, IMCAS
- Skills: PyTorch, TensorFlow, LangChain, React, Python, Node.js
- Projects: DocuMind (RAG system), Computer Vision (YOLO, CLIP, DeepSORT), Strawberry Ripeness Classification (94.5% accuracy)
- Looking for full-time AI Engineer positions worldwide
- Speaks French and English
- Loves music, animals, and traveling

Be friendly, helpful, and concise. If asked something you don't know about Noémie, suggest they contact her directly.
Respond in the same language as the user's question (French or English).`

const suggestedQuestions = [
  "What are your main skills?",
  "Tell me about your projects",
  "What kind of job are you looking for?",
  "Quels sont tes projets IA ?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hi! 👋 I'm Noémie's AI assistant. Ask me anything about her background, skills, or projects!" 
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (text = input) => {
    if (!text.trim() || isLoading) return

    const userMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Call the backend API (api/chat.js) that proxies to OpenAI
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          system: SYSTEM_CONTEXT,
        }),
      })

      if (!response.ok) throw new Error('API error')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      // Fallback response if API fails
      const fallbackResponses = {
        skills: "Noémie is skilled in AI/ML (PyTorch, TensorFlow, LangChain), Frontend (React, Next.js), and Backend (Python, Node.js). She's particularly passionate about Computer Vision and NLP!",
        projects: "Her main projects include: 1) DocuMind - a RAG system for document Q&A, 2) Computer Vision projects with YOLO and CLIP, 3) Strawberry Ripeness Classification with 94.5% accuracy!",
        job: "Noémie is looking for full-time AI Engineer positions worldwide. She's open to relocating and brings both AI expertise and fullstack development skills!",
        default: "I'd love to tell you more! Feel free to ask about Noémie's skills, projects, education, or what kind of opportunities she's looking for. 😊"
      }

      const lowerText = text.toLowerCase()
      let fallback = fallbackResponses.default
      if (lowerText.includes('skill')) fallback = fallbackResponses.skills
      else if (lowerText.includes('project') || lowerText.includes('projet')) fallback = fallbackResponses.projects
      else if (lowerText.includes('job') || lowerText.includes('work') || lowerText.includes('travail')) fallback = fallbackResponses.job

      setMessages(prev => [...prev, { role: 'assistant', content: fallback }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 p-4 gradient-bg rounded-full shadow-lg 
                   shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 w-80 sm:w-96 h-[500px] z-50 
                       glass rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="p-2 bg-violet-500/20 rounded-full">
                <Bot size={20} className="text-violet-400" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-gray-400">Ask me about Noémie</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-1.5 rounded-full h-fit ${
                    message.role === 'user' ? 'bg-violet-500/20' : 'bg-gray-500/20'
                  }`}>
                    {message.role === 'user' ? (
                      <User size={14} className="text-violet-400" />
                    ) : (
                      <Bot size={14} className="text-gray-400" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.role === 'user' 
                      ? 'bg-violet-500 text-white rounded-br-sm' 
                      : 'bg-dark-card text-gray-200 rounded-bl-sm'
                  }`}>
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-full bg-gray-500/20">
                    <Bot size={14} className="text-gray-400" />
                  </div>
                  <div className="bg-dark-card p-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-1">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-2 py-1 bg-dark-card rounded-full text-gray-400 
                               hover:text-white hover:bg-violet-500/20 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-dark-card rounded-full px-4 py-2 text-sm 
                           focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-violet-500 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

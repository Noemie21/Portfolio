import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// In development, serve the Vercel functions in /api directly from the Vite
// dev server so the chatbot works with a plain `npm run dev`.
function localApi() {
  return {
    name: 'local-api',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))
      server.middlewares.use('/api/chat', async (req, res) => {
        let body = ''
        for await (const chunk of req) body += chunk
        req.body = body ? JSON.parse(body) : {}
        res.status = (code) => { res.statusCode = code; return res }
        res.json = (obj) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(obj))
        }
        const { default: handler } = await server.ssrLoadModule('/api/chat.js')
        await handler(req, res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), localApi()],
})

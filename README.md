# 🌟 Portfolio - Noémie Kpatenon

My personal portfolio showcasing my work as an AI Engineer with a Fullstack background.

## ✨ Features

- 🎨 **Dark/Light mode** with smooth transitions
- 🖱️ **Custom cursor** with trail effect
- 💜 **Like counter** with real-time updates (Firebase)
- 🤖 **AI Chatbot** powered by Claude (Anthropic)
- ✨ **Scroll animations** with Framer Motion
- 🥚 **Easter eggs** (try the Konami code!)
- 📱 **Fully responsive** design

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Vercel Serverless Functions
- **Database**: Firebase Realtime Database
- **AI**: Anthropic Claude API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Noemie21/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start dev server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```env
# Anthropic API (for chatbot)
ANTHROPIC_API_KEY=sk-ant-xxxxx

# Firebase (for real-time likes)
VITE_FIREBASE_API_KEY=xxxxx
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=xxxxx
```

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
```

## 🎮 Easter Eggs

- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A
- **Secret Click**: Click on the footer 5 times

## 📁 Project Structure

```
portfolio/
├── api/
│   └── chat.js          # Vercel serverless function for chatbot
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Clients.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── LikeButton.jsx
│   │   ├── Chatbot.jsx
│   │   └── EasterEggs.jsx
│   ├── utils/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## 🔧 Customization

### Adding Projects

Edit `src/components/Projects.jsx` and add to the `projects` array:

```jsx
{
  id: 4,
  title: 'Your Project',
  subtitle: 'Description',
  description: 'Full description...',
  tags: ['React', 'Python'],
  icon: YourIcon,
  color: 'from-green-500 to-teal-500',
  github: 'https://github.com/...',
}
```

### Adding Clients

Edit `src/components/Clients.jsx` and add to the `clients` array.

### Changing Colors

Edit `tailwind.config.js` to customize the primary color palette.

## 📄 License

MIT License

---

Built with 💜 by Noémie Kpatenon

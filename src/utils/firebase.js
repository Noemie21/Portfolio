// Firebase Configuration
// Create a Firebase project at https://console.firebase.google.com
// Enable Realtime Database and get your config

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, set, get } from 'firebase/database'

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
let app
let database

try {
  app = initializeApp(firebaseConfig)
  database = getDatabase(app)
} catch (error) {
  console.warn('Firebase not configured:', error.message)
}

// Likes functions
export async function getLikes() {
  if (!database) return 142 // Default value
  
  const likesRef = ref(database, 'portfolio/likes')
  const snapshot = await get(likesRef)
  return snapshot.val() || 142
}

export function subscribeLikes(callback) {
  if (!database) {
    callback(142)
    return () => {}
  }
  
  const likesRef = ref(database, 'portfolio/likes')
  return onValue(likesRef, (snapshot) => {
    callback(snapshot.val() || 142)
  })
}

export async function incrementLikes() {
  if (!database) return
  
  const likesRef = ref(database, 'portfolio/likes')
  const snapshot = await get(likesRef)
  const currentLikes = snapshot.val() || 142
  await set(likesRef, currentLikes + 1)
}

export { database }

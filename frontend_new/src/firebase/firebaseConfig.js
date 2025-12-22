// frontend/src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGQVCDzgNL9v8KJHhbhgwIL915RLBQXog",
  authDomain: "twinecapital-726aa.firebaseapp.com",
  projectId: "twinecapital-726aa",
  storageBucket: "twinecapital-726aa.firebasestorage.app",
  messagingSenderId: "526576951365",
  appId: "1:526576951365:web:00ef2e492def93a0a7432c",
  measurementId: "G-SCBNWYBL1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Auth
export const auth = getAuth(app);

// Initialize and export Firestore
export const db = getFirestore(app);

// Initialize and export Analytics
export const analytics = getAnalytics(app);

// Export the app instance
export default app;

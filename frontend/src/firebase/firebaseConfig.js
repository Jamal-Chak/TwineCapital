// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ For authentication
//import { getAnalytics } from "firebase/analytics"; // ❌ Optional (commented out to prevent warning)

// Your web app's Firebase configuration
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

// ✅ Initialize and export Firebase Auth
const auth = getAuth(app);

// ❌ Optional analytics (disabled to avoid warning)
// const analytics = getAnalytics(app);

// ✅ Export only what's used
export { auth };

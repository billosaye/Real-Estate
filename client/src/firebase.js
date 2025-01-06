// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "real-estate-75d67.firebaseapp.com",
  projectId: "real-estate-75d67",
  storageBucket: "real-estate-75d67.firebasestorage.app",
  messagingSenderId: "560754740606",
  appId: "1:560754740606:web:3f8b595fbf1173ddd2b72f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
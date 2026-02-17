
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "notesgen-77957.firebaseapp.com",
  projectId: "notesgen-77957",
  storageBucket: "notesgen-77957.firebasestorage.app",
  messagingSenderId: "384546326928",
  appId: "1:384546326928:web:e9a048261479656c0d0b15",
  measurementId: "G-2LL7LEG3Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };


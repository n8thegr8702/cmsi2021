import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfj1y6_yiWdAFTbXwqoZjwL7tK0ek2yZo",
  authDomain: "blog-777fc.firebaseapp.com",
  projectId: "blog-777fc",
  storageBucket: "blog-777fc.appspot.com",
  messagingSenderId: "623534487536",
  appId: "1:623534487536:web:719a96707b6195b3c5cf35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
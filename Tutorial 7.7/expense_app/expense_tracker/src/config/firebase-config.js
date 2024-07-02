// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2vNipZQhF_6A4slARly_SeWMjC9_E0JE",
  authDomain: "expense-tracker-b0e2a.firebaseapp.com",
  projectId: "expense-tracker-b0e2a",
  storageBucket: "expense-tracker-b0e2a.appspot.com",
  messagingSenderId: "1004142083191",
  appId: "1:1004142083191:web:3d24e3c931d5b4cbb75a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
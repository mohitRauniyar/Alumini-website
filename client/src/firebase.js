// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "alumini-website-649a9.firebaseapp.com",
  projectId: "alumini-website-649a9",
  storageBucket: "alumini-website-649a9.appspot.com",
  messagingSenderId: "179539698774",
  appId: "1:179539698774:web:e6e1c26deb6811e1cc07f7",
  measurementId: "G-7H6MTT8BQC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
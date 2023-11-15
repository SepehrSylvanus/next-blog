// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE ,
  authDomain: "blog-56fe8.firebaseapp.com",
  projectId: "blog-56fe8",
  storageBucket: "blog-56fe8.appspot.com",
  messagingSenderId: "894446076465",
  appId: "1:894446076465:web:91a46d83e0ed9ace798b10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
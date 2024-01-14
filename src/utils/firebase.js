// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6B7aYimGsrhjdqk-0llg7Hkg93BG4fc",
  authDomain: "netflix-gpt-6d11c.firebaseapp.com",
  projectId: "netflix-gpt-6d11c",
  storageBucket: "netflix-gpt-6d11c.appspot.com",
  messagingSenderId: "34873298281",
  appId: "1:34873298281:web:ef33b6860a500fa9db01f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

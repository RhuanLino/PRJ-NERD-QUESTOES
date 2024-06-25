// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvhPxDPMKeLiZORlfkakuzoxQbiZM-zps",
  authDomain: "nerd-questoes.firebaseapp.com",
  projectId: "nerd-questoes",
  storageBucket: "nerd-questoes.appspot.com",
  messagingSenderId: "130986971499",
  appId: "1:130986971499:web:59f36da2241d83b89d7c2e",
  measurementId: "G-XF19YFFBFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
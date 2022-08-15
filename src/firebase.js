// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC2Y2SC_kjKuIcayJ4lW-Se00rsAJKgEQ",
  authDomain: "react-firebase-auth-17f22.firebaseapp.com",
  projectId: "react-firebase-auth-17f22",
  storageBucket: "react-firebase-auth-17f22.appspot.com",
  messagingSenderId: "572477730488",
  appId: "1:572477730488:web:ce302260761e9c1d728e4d",
  measurementId: "G-89M9DKFV61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth}

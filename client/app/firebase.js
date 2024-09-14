// client/app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDMKDGesYy9FpARfdARFEITt5yllgHAUw",
    authDomain: "recapp-3a874.firebaseapp.com",
    projectId: "recapp-3a874",
    storageBucket: "recapp-3a874.appspot.com",
    messagingSenderId: "666868553257",
    appId: "1:666868553257:web:4a69475345bd3110d5ee38",
    measurementId: "G-G8KCQ0Z7VF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the authentication module

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgT380KkjaSJGllOtp7Exki20adrFnGgc",
  authDomain: "the-new-cave.firebaseapp.com",
  projectId: "the-new-cave",
  storageBucket: "the-new-cave.appspot.com",
  messagingSenderId: "954505820239",
  appId: "1:954505820239:web:e5d36cc4c6d77839fb123a",
}

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

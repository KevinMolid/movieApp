/* Imports */
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

/* Firebase setup */
const firebaseConfig = {
    apiKey: "AIzaSyC-hxiOkkzfag5QWkv4aS29Ot4AFAmv2Rs",
    authDomain: "moody-3795c.firebaseapp.com",
    projectId: "moody-3795c",
    storageBucket: "moody-3795c.appspot.com"
  }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

console.log(app)

/* UI Elements */
const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")
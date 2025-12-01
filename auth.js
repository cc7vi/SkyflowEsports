// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your Firebase Config (SAFE PUBLIC INFO)
const firebaseConfig = {
    apiKey: "AIzaSyD7t_b2RAVwTHCw2H8l7OJ84qg6VPNv4e0",
    authDomain: "skyflowesports-a79e7.firebaseapp.com",
    projectId: "skyflowesports-a79e7",
    storageBucket: "skyflowesports-a79e7.firebasestorage.app",
    messagingSenderId: "520696951008",
    appId: "1:520696951008:web:cd99681cbd8b9b289ae085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
    
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            errorMsg.textContent = error.message.replace("Firebase:", "");
        });
};
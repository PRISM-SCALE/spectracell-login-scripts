import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBN9i_dRUtuHim0RQO8P1Xx_0SsPAUMjb0",
  authDomain: "spectracell-provider-auth.firebaseapp.com",
  projectId: "spectracell-provider-auth",
  storageBucket: "spectracell-provider-auth.firebasestorage.app",
  messagingSenderId: "893082488254",
  appId: "1:893082488254:web:850b33c83cc82d42797def",
  measurementId: "G-59N0KFCC25"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

async function forgotPassword() {
  const email = document.getElementById("user-email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  try {
    await auth.sendPasswordResetEmail(email);
    alert("A password reset email has been sent to " + email);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document.getElementById("forgot-password-button").addEventListener("click", forgotPassword);

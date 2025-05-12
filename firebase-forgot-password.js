import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth,
  sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyA9jyDnF9U111CsOgt8wiayoXYdSgFym44",
  authDomain: "spectracell-test.firebaseapp.com",
  projectId: "spectracell-test",
  storageBucket: "spectracell-test.firebasestorage.app",
  messagingSenderId: "867376517322",
  appId: "1:867376517322:web:33d56ac7d0888fcb80a433"
};

// Modular initialization:
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function forgotPassword() {
  const email = document.getElementById("user-email").value;
  if (!email) {
    alert("Please enter your email address.");
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    alert("A password reset email has been sent to " + email);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

document
  .getElementById("forgot-password-button")
  .addEventListener("click", forgotPassword);


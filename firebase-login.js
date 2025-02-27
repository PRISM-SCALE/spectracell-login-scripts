import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA9jyDnF9U111CsOgt8wiayoXYdSgFym44",
  authDomain: "spectracell-test.firebaseapp.com",
  projectId: "spectracell-test",
  storageBucket: "spectracell-test.firebasestorage.app",
  messagingSenderId: "867376517322",
  appId: "1:867376517322:web:33d56ac7d0888fcb80a433"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "/providers/dashboard";
  }
});

const displayError = (message) => {
  const errorDiv = document.getElementById('error-div');
  errorDiv.textContent = message;
};

document.getElementById('login-button').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    displayError('Email and password are required!');
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/providers/dashboard";
  } catch (error) {
    displayError(error.message);
  }
});

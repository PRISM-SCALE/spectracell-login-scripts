import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBN9i_dRUtuHim0RQO8P1Xx_0SsPAUMjb0",
  authDomain: "spectracell-provider-auth.firebaseapp.com",
  projectId: "spectracell-provider-auth",
  storageBucket: "spectracell-provider-auth.firebasestorage.app",
  messagingSenderId: "893082488254",
  appId: "1:893082488254:web:850b33c83cc82d42797def",
  measurementId: "G-59N0KFCC25"
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

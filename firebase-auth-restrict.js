import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Add styles
const style = document.createElement('style');
style.textContent = `body { visibility: hidden; opacity: 0; } body.authenticated { visibility: visible; opacity: 1; }`;
document.head.appendChild(style);

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
  if (!user) {
    window.location.href = "/user-sign-in";
  } else {
    const loginButton = document.getElementById('login-button-provider');
    if (loginButton) {
      loginButton.textContent = "Log Out";
      loginButton.onclick = () => {
        signOut(auth).then(() => {
          alert("Logged out successfully!");
          window.location.href = "/user-sign-in";
        }).catch((error) => {
          alert(`Error: ${error.message}`);
        });
      };
    }
    document.body.classList.add('authenticated');
  }
});

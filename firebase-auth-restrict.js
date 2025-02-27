import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Add styles
const style = document.createElement('style');
style.textContent = `body { visibility: hidden; opacity: 0; } body.authenticated { visibility: visible; opacity: 1; }`;
document.head.appendChild(style);

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

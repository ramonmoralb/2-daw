import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtwkassNUJ4jhCbYXGg3zWuNWEbZTRakg",
  authDomain: "practica6-02dac.firebaseapp.com",
  projectId: "practica6-02dac",
  storageBucket: "practica6-02dac.firebasestorage.app",
  messagingSenderId: "822006806078",
  appId: "1:822006806078:web:0f14b2a8be255f5a7e436f",
  measurementId: "G-S841H5E8BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };

// usando npm install firebas facilita el proceso, descarga la libreria...
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"; // ojo a las versiones
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"; // ojo a las versiones

const firebaseConfig = {
  apiKey: "AIzaSyBtwkassNUJ4jhCbYXGg3zWuNWEbZTRakg",
  authDomain: "practica6-02dac.firebaseapp.com",
  projectId: "practica6-02dac",
  storageBucket: "practica6-02dac.firebasestorage.app",
  messagingSenderId: "822006806078",
  appId: "1:822006806078:web:0f14b2a8be255f5a7e436f",
  measurementId: "G-S841H5E8BQ",
};

const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);

export { app, autentificacion };

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyBaZTkTNlsm81a3WG8sryLUWvEm1Wp-2Tg",
    authDomain: "practica6-3dwc.firebaseapp.com",
    projectId: "practica6-3dwc",
    storageBucket: "practica6-3dwc.firebasestorage.app",
    messagingSenderId: "282511165453",
    appId: "1:282511165453:web:df2aa84a3bac4479356d44"
};


const app = initializeApp(firebaseConfig);

export { app };
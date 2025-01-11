import { app, autentificacion } from "../firebase/firebaseDatos.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; // ojo a las verisones

document.addEventListener("DOMContentLoaded", () => {
  console.log(app);

  const db = getFirestore(app);
  console.log(db);
  const fetchData = async () => {
    const coleccionContactos = collection(db, "contactos");
    const documentosContactos = await getDocs(coleccionContactos);
    documentosContactos.forEach((doc) => {
      console.log(doc.data().nombre);
    });
  };
  fetchData();
});

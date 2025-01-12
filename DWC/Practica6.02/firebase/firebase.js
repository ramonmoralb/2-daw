import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { app } from "./firebaseDatos.js";

const db = getFirestore(app);

const fetchDatos = async () => {
  const contactos = [];
  const colleccionContacos = collection(db, "contactos");
  const datosColeccion = await getDocs(colleccionContacos);
  datosColeccion.forEach((doc) => {
    console.log(doc.data());
    contactos.push(doc.data());
  });
  return contactos;
};
export { fetchDatos };

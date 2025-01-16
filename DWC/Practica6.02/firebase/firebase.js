import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  writeBatch,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { app } from "./firebaseDatos.js";

const db = getFirestore(app);

const fetchDatos = async () => {
  const contactos = [];
  const colleccionContacos = collection(db, "contactos");
  const datosColeccion = await getDocs(colleccionContacos);
  datosColeccion.forEach((doc) => {
    //    console.log(doc.data());
    contactos.push(doc.data());
  });
  return contactos;
};


const addAgendaFB = async () => {
  const agendaActualFB = await fetchDatos();// recupera los datos de firebase para no duplicar,
  const agendaActualLS = JSON.parse(localStorage.getItem("agenda")); // contactos firebase
  if (agendaActualLS === null) {
    agenda = [];
  }

  const contactosAAnadir = [];


  //todo cambiar telefonos por id
  // recupero los telefonos de la agenda para usarlos como identificador
  const telefonosAgendaAcutalFB = [];
  agendaActualFB.forEach((contacto) => {

    telefonosAgendaAcutalFB.push(contacto.telefono)
  });

  //todo cambiar telefonos por id
  agendaActualLS.forEach((contacto) => {
    if (!telefonosAgendaAcutalFB.includes(contacto.telefono)) {
      contactosAAnadir.push(contacto);
    }
  })


  const batch = writeBatch(db);
  contactosAAnadir.forEach((contacto) => { // añade a la coleccion de fb
    const docRef = doc(collection(db, "contactos"));
    batch.set(docRef, contacto);
  });

  await batch.commit();

  //todo cambiar telefonos por id
  // borrar de FireBase lo que se borre en localstorage al sincronizar
  const agendaFBActualizada = await fetchDatos(); // recupera los datos de firebase para chekear
  const telefonosAgendaAcutalizadaFB = [];
  agendaFBActualizada.forEach((contacto) => {
    telefonosAgendaAcutalizadaFB.push(contacto.telefono)
  });


  console.log("ls", agendaActualLS);
  const agendaActualFBParaCheckear = await fetchDatos(); // recupera los datos de firebase para chekear

  console.log("fb", agendaActualFBParaCheckear);
  console.log("contactos añadidos")
}
export { fetchDatos, addAgendaFB };

import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  addDoc,
  setDoc,
  doc,
  writeBatch,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { app } from "./firebaseDatos.js";
import { listarFireBase, listarLocalStorage } from "../funciones/funciones.js";

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
  const idsAgendaAcutalFB = [];
  agendaActualFB.forEach((contacto) => {
    idsAgendaAcutalFB.push(contacto.id)
  });


  agendaActualLS.forEach((contacto) => {
    if (!idsAgendaAcutalFB.includes(contacto.id)) {
      contactosAAnadir.push(contacto);
    }
  })


  const batch = writeBatch(db);
  contactosAAnadir.forEach((contacto) => { // añade a la coleccion de fb
    const docRef = doc(collection(db, "contactos"), contacto.id); // Importante el segundo parametro, sera la ref en la base de datos (id)
    batch.set(docRef, contacto);
  });

  await batch.commit();

  //todo cambiar telefonos por id
  // borrar de FireBase lo que se borre en localstorage al sincronizar
  const agendaFBActualizada = await fetchDatos(); // recupera los datos de firebase para chekear
  const idsAgendaAcutalizadaFB = [];
  agendaFBActualizada.forEach((contacto) => {
    idsAgendaAcutalizadaFB.push(contacto.id)
  });
  console.log(idsAgendaAcutalizadaFB)


  console.log("ls", agendaActualLS);
  const agendaActualFBParaCheckear = await fetchDatos(); // recupera los datos de firebase para chekear

  console.log("fb", agendaActualFBParaCheckear);
  console.log("contactos añadidos")
  listarFireBase();
  listarLocalStorage();
}

const actualizarContacto = async (id, nuevoId, nuevoNombre, nuevoApellidos, nuevoDireccion, nuevoTelefono) => {
  try {
    const colleccionContacos = collection(db, "contactos");
    const anteriorDocRef = doc(colleccionContacos, id);
    const nuevoDocRef = doc(colleccionContacos, nuevoId);


    const docSnap = await getDoc(oldDocRef);
    if (!docSnap.exists()) {
      console.log("No se encontró el documento con id:", id);
      return;
    }

    await setDoc(nuevoDocRef, {
      id: nuevoId,
      nombre: nuevoNombre,
      apellidos: nuevoApellidos,
      direccion: nuevoDireccion,
      telefono: nuevoTelefono,
    });

    //emimino el documento anterior
    await deleteDoc(anteriorDocRef);

    console.log("Contacto migrado a un nuevo ID correctamente.");
  } catch (error) {
    console.log("Error al migrar el contacto:", error);
  }
};

const eliminarContacto = async (id) => {
  try {
    const colleccionContacos = collection(db, "contactos");
    const oldDocRef = doc(colleccionContacos, id);
    const docSnap = await getDoc(oldDocRef);
    if (!docSnap.exists()) {
      console.log("No se encontró el documento con id:", id);
      return;
    }
    await deleteDoc(oldDocRef);
    console.log("Contacto borrado");
  } catch (error) {
    console.log(error)
  }

}



export { fetchDatos, addAgendaFB, actualizarContacto, eliminarContacto };

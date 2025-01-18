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
  listarFireBase();
  listarLocalStorage();
}

const actualizarContacto = async (id, nuevoId, nuevoNombre, nuevoApellidos, nuevoDireccion, nuevoTelefono) => {
  try {
    const colleccionContacos = collection(db, "contactos");
    const anteriorDocRef = doc(colleccionContacos, id);
    const nuevoDocRef = doc(colleccionContacos, nuevoId);


    const docSnap = await getDoc(anteriorDocRef);
    if (!docSnap.exists()) {
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

  } catch (error) {
    console.log("Error al migrar el contacto:", error);
  }
};

const eliminarContacto = async (id) => {
  try {
    const colleccionContacos = collection(db, "contactos");
    const anteriorDocRef = doc(colleccionContacos, id);
    const docSnap = await getDoc(anteriorDocRef);
    if (!docSnap.exists()) {
      return;
    }
    await deleteDoc(anteriorDocRef);
  } catch (error) {
    console.log(error)
  }

}


export { fetchDatos, addAgendaFB, actualizarContacto, eliminarContacto };

import { app } from "./firebaseDatos.js";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    getDoc,
    setDoc,
    doc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
"use strict"
const db = getFirestore(app);
const fetchDatos = async () => {
    const contactos = [];
    const colleccionContacos = collection(db, "contactos");
    const datosColeccion = await getDocs(colleccionContacos);
    datosColeccion.forEach((doc) => {
        contactos.push(doc.data());
    });
    return contactos;
};


const addContactoFb = async (contacto) => {
    const contactos = await fetchDatos()
    var anadir = true;
    contactos.forEach(contactoFb => {
        if (contactoFb.id == contacto.id) {
            anadir = false;
        }
    })
    if (anadir) {
        try {
            const docRef = doc(db, "contactos", contacto.id);
            await setDoc(docRef, contacto);
            return true;
        } catch (error) {
            console.log(error)
        }
    } else {
        return false;
    }
}

const updateContactoFb = async (contactoActualizado, idAnterior) => {
    try {
        const colleccionContactos = collection(db, "contactos");
        const anteriorDocRef = doc(colleccionContactos, idAnterior);
        const nuevoDocRef = doc(colleccionContactos, contactoActualizado.id);

        const docSnap = await getDoc(anteriorDocRef);
        if (!docSnap.exists()) {
            console.error("El documento no existe:", idAnterior);
            return false;
        }


        await setDoc(nuevoDocRef, {
            id: contactoActualizado.id,
            nombre: contactoActualizado.nombre,
            apellidos: contactoActualizado.apellidos,
            direccion: contactoActualizado.direccion,
            telefono: contactoActualizado.telefono,
        });

        console.log("Documento actualizado correctamente:", contactoActualizado.id);


        if (idAnterior !== contactoActualizado.id) {
            await deleteDoc(anteriorDocRef);
        }

        return true;
    } catch (error) {
        console.error("Error al actualizar el contacto:", error);
        return false;
    }
};
//  recibe un callback como argumento// será la función listar
const listarContactosEnTiempoReal = (callback) => {
    const coleccionContactos = collection(db, "contactos");

    // on snapshot pone un listerner en la colección
    onSnapshot(coleccionContactos, (snapshot) => {
        const contactos = [];


        snapshot.forEach((doc) => {
            contactos.push({ ...doc.data() });
        });

        // aquí se ejecuta el callback que se pasa como argumentos
        callback(contactos);
    });
};

const deleteContacto = async (id, e) => {
    try {
        const colleccionContacos = collection(db, "contactos");
        const anteriorDocRef = doc(colleccionContacos, id);
        const docSnap = await getDoc(anteriorDocRef);
        if (!docSnap.exists()) {
            return;
        }
        await deleteDoc(anteriorDocRef);
        e.target.parentNode.remove();
    } catch (error) {
        console.log(error)
    }
}


export { fetchDatos, addContactoFb, updateContactoFb, listarContactosEnTiempoReal, deleteContacto }

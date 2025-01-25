import { fetchDatos, listarContactosEnTiempoReal, deleteContacto } from "../firebase/firebase.js";
import { updateContacto } from "../js/formulariosLogica.js";

const getAll = async () => {
    const contactos = await fetchDatos();
    return contactos;
}
const getContactoPorID = async (id) => {
    const contactos = await getAll();
    return contactos.find(contacto => contacto.id == id) || null;
}

const listar = (contactos) => {
    const listaContactos = document.getElementById("lista-contactos")
    listaContactos.innerHTML = "";
    contactos.forEach(contacto => {
        contactoToLi(contacto, listaContactos);
    });
}
// actica el listener de contactos
listarContactosEnTiempoReal(listar);


const contactoToLi = (contacto, listaContenedor) => {

    const { nombre, apellidos, direccion, telefono, id } = contacto;
    const li = document.createElement("li");
    const pNombre = document.createElement("p");
    const pApellidos = document.createElement("p");
    const pDireccion = document.createElement("p");
    const pTelefono = document.createElement("p");
    const botonBorrarContacto = document.createElement("button");
    const botonEditarContacto = document.createElement("button");
    const divBotones = document.createElement("div");
    botonBorrarContacto.innerHTML = "Borrar";
    botonEditarContacto.innerHTML = "Editar";
    botonEditarContacto.addEventListener("click", async () => { await updateContacto(id) })
    botonBorrarContacto.addEventListener("click", async (e) => { await deleteContacto(id, e) })

    pNombre.innerHTML = `Nombre: ${nombre}`;
    pApellidos.innerHTML = `Apellidos: ${apellidos}`;
    pDireccion.innerHTML = `Dirección: ${direccion}`;
    pTelefono.innerHTML = `Telefono: ${telefono}`;

    li.appendChild(pNombre);
    li.appendChild(pApellidos);
    li.appendChild(pDireccion);
    li.appendChild(pTelefono);
    divBotones.appendChild(botonBorrarContacto);
    divBotones.appendChild(botonEditarContacto);
    li.appendChild(divBotones);
    listaContenedor.appendChild(li)
}

const mostarLista = () => {
    const contenedorLista = document.getElementById("container-div");
    if (contenedorLista.classList.contains("visible")) {
        contenedorLista.classList.remove("visible");
    } else {
        contenedorLista.classList.add("visible");
    }
}

export { getAll, getContactoPorID, contactoToLi, mostarLista };
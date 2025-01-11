import { validarForm, validarPromt } from "../validaciones/validaciones.js";
const listaContactosFitrados = document.getElementById("lista-contactos-filtrados");

const anadirLocalStore = (contacto) => {
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    agenda.push(contacto);
    localStorage.setItem("agenda", JSON.stringify(agenda))
    actualizarLista();
}

const contactoToLi = (contacto, indice) => {
    const { nombre, apellidos, direccion, telefono } = contacto;
    const li = document.createElement("li");
    const pNombre = document.createElement("p");
    const pApellidos = document.createElement("p");
    const pDireccion = document.createElement("p");
    const pTelefono = document.createElement("p");
    const botonBorrarContacto = document.createElement("button");
    const botonEditarContacto = document.createElement("button");
    botonBorrarContacto.innerHTML = "Borrar";
    botonEditarContacto.innerHTML = "Editar";
    botonEditarContacto.addEventListener("click", () => { editarContacto(indice) })
    botonBorrarContacto.addEventListener("click", () => {
        borrarContacto(indice);
    })

    pNombre.innerHTML = `Nombre: ${nombre}`;
    pApellidos.innerHTML = `Apellidos: ${apellidos}`;
    pDireccion.innerHTML = `Dirección: ${direccion}`;
    pTelefono.innerHTML = `Telefono: ${telefono}`;
    li.appendChild(pNombre);
    li.appendChild(pApellidos);
    li.appendChild(pDireccion);
    li.appendChild(pTelefono);
    li.appendChild(botonBorrarContacto);
    li.appendChild(botonEditarContacto);
    return li;
}

const listar = () => {
    if (listaContactosFitrados.style.display === "none" || listaContactosFitrados.style.display === "") {

        listaContactosFitrados.style.display = "block";
        listaContactosFitrados.innerHTML = "";
        var agenda = JSON.parse(localStorage.getItem("agenda"));
        if (agenda === null) {
            agenda = [];
        }
        if (agenda.length === 0) {
            listaContactosFitrados.innerHTML = "<li>Lista vacía.</li>";
        } else {
            agenda.forEach((contacto, indice) => {
                listaContactosFitrados.appendChild(contactoToLi(contacto, indice));
            });
        }
    } else {
        listaContactosFitrados.style.display = "none";
    }
}
const actualizarLista = () => {
    listaContactosFitrados.innerHTML = "";
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    if (agenda.length === 0) {
        listaContactosFitrados.innerHTML = "<li>Lista vacía.</li>";
    } else {
        agenda.forEach((contacto, indice) => {
            listaContactosFitrados.appendChild(contactoToLi(contacto, indice));
        });
    }
}


const borrarContacto = (indiceContacto) => {
    const agenda = JSON.parse(localStorage.getItem("agenda"))
    agenda.splice(indiceContacto, 1);

    localStorage.setItem("agenda", JSON.stringify(agenda))
    actualizarLista();
}

const mostrarContacto = (contactoFiltrados) => {
    listaContactosFitrados.innerHTML = "";
    listaContactosFitrados.classList.remove("visible");
    if (contactoFiltrados.length > 0) {
        contactoFiltrados.forEach(contacto => listaContactosFitrados.appendChild(contactoToLi(contacto)))
    }
}

const buscarContacto = (contactoObj, fn) => { // recibe la función necesaria según lo que se necesite
    const agenda = JSON.parse(localStorage.getItem("agenda"))
    if (agenda !== null && agenda.length > 0) {
        const resultado = agenda.filter((contacto) => contacto.nombre === contactoObj.nombre || contacto.apellidos === contactoObj.apellidos || contacto.telefono === contactoObj.telefono);
        fn(resultado);
    } else {
        return [];
    }
}

const editarContacto = (indice) => {
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    var nombre = prompt("Nuevo nombre:")
    var apellidos = prompt("Nuevos apellidos:")
    var direccion = prompt("Nuevo dirección:")
    var telefono = prompt("Nuevo Teléfono:")
    if (validarPromt(nombre, apellidos, direccion, telefono)) {
        if (nombre === null) {
            nombre = agenda[indice].nombre;
        } if (apellidos === null) {
            apellidos = agenda[indice].apellidos;
        } if (direccion === null) {
            direccion = agenda[indice].direccion;
        } if (telefono === null) {
            telefono = agenda[indice].telefono;
        }
        agenda[indice] = { nombre, apellidos, direccion, telefono }
        localStorage.setItem("agenda", JSON.stringify(agenda))
    }
    else {
        alert("Los datos no cumplen con los requisitos");
    }
    actualizarLista();
}

const isForm = (formulario) => {
    formulario.classList.contains("visible") ? formulario.classList.remove("visible") : formulario.classList.add("visible");
}
export { validarForm, anadirLocalStore, listar, borrarContacto, buscarContacto, mostrarContacto, editarContacto, isForm };
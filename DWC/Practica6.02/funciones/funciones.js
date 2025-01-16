import { validarForm, validarPromt } from "../validaciones/validaciones.js";
import { actualizarContacto, eliminarContacto, fetchDatos } from "../firebase/firebase.js";
const listaContactosFitrados = document.getElementById("lista-contactos-filtrados");

const anadirLocalStore = (contacto) => {
    var anadirContacto = true;
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    if (agenda.length > 0) {
        agenda.forEach((contactoAgenda) => {
            if (contacto.id === contactoAgenda.id) {
                alert(`El contacto ya existe en el contacto del localStorage de [ ${contacto.nombre} ${contacto.apellidos} ]`);
                anadirContacto = false;
            }
        })
    }
    if (anadirContacto) {
        agenda.push(contacto);
        localStorage.setItem("agenda", JSON.stringify(agenda))
    }
    actualizarLista(listaContactosFitrados);
    listarFireBase();
    listarLocalStorage();
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

const actualizarLista = (listaHtmlElement) => {
    listaHtmlElement.innerHTML = "";
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    if (agenda.length === 0) {
        listaHtmlElement.innerHTML = "<li>Lista vacía.</li>";
    } else {
        agenda.forEach((contacto, indice) => {
            listaHtmlElement.appendChild(contactoToLi(contacto, indice));
        });
    }
}


const borrarContacto = async (indiceContacto) => {
    const agenda = await JSON.parse(localStorage.getItem("agenda"));

    await eliminarContacto(agenda[indiceContacto].id);
    agenda.splice(indiceContacto, 1);
    localStorage.setItem("agenda", JSON.stringify(agenda))
    actualizarLista(listaContactosFitrados);
    listarFireBase();
    listarLocalStorage();

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
    var nuevoNombre = prompt("Nuevo nombre:");
    var nuevoApellidos = prompt("Nuevos apellidos:");
    var nuevoDireccion = prompt("Nuevo dirección:");
    var nuevoTelefono = prompt("Nuevo Teléfono:");
    var nuevoId = nuevoTelefono;

    if (validarPromt(nuevoNombre, nuevoApellidos, nuevoDireccion, nuevoTelefono)) {
        if (!nuevoNombre) {
            nuevoNombre = agenda[indice].nombre;
        }
        if (!nuevoApellidos) {
            nuevoApellidos = agenda[indice].apellidos;
        }
        if (!nuevoDireccion) {
            nuevoDireccion = agenda[indice].direccion;
        }
        if (!nuevoTelefono) {
            nuevoTelefono = agenda[indice].telefono;
            nuevoId = agenda[indice].id;
        }

        console.log(agenda[indice].id);

        actualizarContacto(agenda[indice].id, nuevoId, nuevoNombre, nuevoApellidos, nuevoDireccion, nuevoTelefono);

        agenda[indice] = { id: nuevoId, nombre: nuevoNombre, apellidos: nuevoApellidos, direccion: nuevoDireccion, telefono: nuevoTelefono };
        localStorage.setItem("agenda", JSON.stringify(agenda));
    } else {
        alert("Los datos no cumplen con los requisitos");
    }
    actualizarLista(listaContactosFitrados);
    listarFireBase();
    listarLocalStorage();
};

const listarLocalStorage = async () => {
    const listaLS = document.getElementById("lista-comparacion-ls");
    listaLS.innerHTML = "";
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    if (agenda.length === 0) {
        listaLS.innerHTML = "<li>Lista vacía.</li>";
    } else {
        agenda.forEach((contacto, indice) => {
            listaLS.appendChild(contactoToLi(contacto, indice));
        });
    }
}
const listarFireBase = async () => {
    const contactos = await fetchDatos();
    console.log(contactos)
    const listaFB = document.getElementById("lista-comparacion-fb");
    listaFB.innerHTML = "";

    if (contactos.length === 0) {
        listaFB.innerHTML = "<li>Lista vacía.</li>";
    } else {
        contactos.forEach((contacto, indice) => {
            listaFB.appendChild(contactoToLi(contacto, indice));
        });
    }
}


const isForm = (formulario) => {
    formulario.classList.contains("visible") ? formulario.classList.remove("visible") : formulario.classList.add("visible");
}
export { validarForm, anadirLocalStore, listar, borrarContacto, buscarContacto, mostrarContacto, editarContacto, isForm, listarLocalStorage, listarFireBase };
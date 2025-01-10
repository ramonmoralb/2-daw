const listaContactos = document.getElementById("lista-contactos");

const validarForm = (nombre, apellidos, direccion, telefono) => {
    document.querySelector(".error-nombre").innerHTML = ""
    document.querySelector(".error-apellidos").innerHTML = ""
    document.querySelector(".error-telefono").innerHTML = ""
    document.querySelector(".error-direccion").innerHTML = ""
    let valido = true;
    const patternNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternApellidos = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternDireccion = /^.{3,}$/;
    if (!patternNombre.test(nombre)) {
        document.querySelector(".error-nombre").innerHTML = "El nombre debe contener 5 caracteres, y no debe contener números ni espacios."
        valido = false;
    }
    if (!patternApellidos.test(apellidos)) {
        document.querySelector(".error-apellidos").innerHTML = "Los apellidos deben contener al menos 5 caracteres, y no debe contener números."
        valido = false;

    } if (!patternDireccion.test(direccion)) {
        document.querySelector(".error-direccion").innerHTML = "La direccion es erronea."
        valido = false;

    }
    if (isNaN(telefono) && telefono.length < 9) {
        document.querySelector(".error-telefono").innerHTML = "El teléfono contener 9 dígitos númericos"
        valido = false;
    }
    return valido;
}
const validarPromt = (nombre, apellidos, direccion, telefono) => {

    let valido = true;
    const patternNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternApellidos = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternDireccion = /^.{3,}$/;
    if (!patternNombre.test(nombre)) {

        valido = false;
    }
    if (!patternApellidos.test(apellidos)) {
        valido = false;

    } if (!patternDireccion.test(direccion)) {
        valido = false;

    }
    if (isNaN(telefono) && telefono.length < 9) {
        valido = false;
    }
    return valido;
}
const anadirLocalStore = (contacto) => {
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    agenda.push(contacto);
    localStorage.setItem("agenda", JSON.stringify(agenda))
    actualizarLista();

}
const borrarAgenda = () => {
    localStorage.clear();
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
    if (listaContactos.style.display === "none" || listaContactos.style.display === "") {

        listaContactos.style.display = "block";
        listaContactos.innerHTML = "";
        var agenda = JSON.parse(localStorage.getItem("agenda"));
        if (agenda === null) {
            agenda = [];
        }
        if (agenda.length === 0) {
            listaContactos.innerHTML = "<li>Lista vacía.</li>";
        } else {
            agenda.forEach((contacto, indice) => {
                listaContactos.appendChild(contactoToLi(contacto, indice));
            });
        }
    } else {
        listaContactos.style.display = "none";
    }
}
const actualizarLista = () => {
    listaContactos.innerHTML = "";
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    if (agenda.length === 0) {
        listaContactos.innerHTML = "<li>Lista vacía.</li>";
    } else {
        agenda.forEach((contacto, indice) => {
            listaContactos.appendChild(contactoToLi(contacto, indice));
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
    listaContactos.innerHTML = "";
    listaContactos.classList.remove("visible");
    if (contactoFiltrados.length > 0) {
        contactoFiltrados.forEach(contacto => listaContactos.appendChild(contactoToLi(contacto)))
    }
}

const buscarContacto = (contactoObj, fn) => { // recibe la función necesaria segun lo que se necesite
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
export { validarForm, anadirLocalStore, borrarAgenda, listar, borrarContacto, buscarContacto, mostrarContacto, editarContacto };
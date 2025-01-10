const validarForm = (nombre, apellidos, direccion, telefono) => {
    document.querySelector(".error-nombre").innerHTML = ""
    document.querySelector(".error-apellidos").innerHTML = ""
    document.querySelector(".error-telefono").innerHTML = ""
    document.querySelector(".error-direccion").innerHTML = ""
    let valido = true;
    const patternNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{6,}$/;
    const patternApellidos = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]{6,}$/;
    const patternDireccion = /^.{6,}$/;
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
const anadirLocalStore = (contacto) => {
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }
    agenda.push(contacto);
    localStorage.setItem("agenda", JSON.stringify(agenda))
    console.log(agenda)
}
const borrarAgenda = () => {
    localStorage.clear();
}
const contactoToLi = (contacto, indice) => {
    const { nombre, apellidos, direccion, telefono } = contacto;
    const li = document.createElement("li");
    const pNombre = document.createElement("p");
    const pApellidos = document.createElement("p");
    const pDireccion = document.createElement("p");
    const pTelefono = document.createElement("p");
    const botonBorrarContacto = document.createElement("button");
    botonBorrarContacto.innerHTML = "Borrar";
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
    return li;
}
const listar = () => {
    const listaContactos = document.getElementById("lista-contactos");
    listaContactos.innerHTML = "";
    var agenda = JSON.parse(localStorage.getItem("agenda"));
    if (agenda === null) {
        agenda = [];
    }

    agenda.forEach((contacto, indice) => {
        listaContactos.appendChild(contactoToLi(contacto, indice));
    })

}
const borrarContacto = (indiceContacto) => {
    const agenda = JSON.parse(localStorage.getItem("agenda"))
    agenda.splice(indiceContacto, 1);
    localStorage.setItem("agenda", JSON.stringify(agenda))
    listar();
}

export { validarForm, anadirLocalStore, borrarAgenda, listar, borrarContacto };
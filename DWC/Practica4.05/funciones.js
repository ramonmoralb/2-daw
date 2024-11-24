

function verificarExistencia(nombre, id) {
    const formulario = document.getElementById('formularioGenerado')

    if (document.getElementById(id) || formulario.querySelector(`[name="${nombre}"]`)) {
        return true
    }
    return false
}


function crearInputText() {
    const nombre = prompt("Introduce el nombre e id del input de tipo texto:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const input = document.createElement('input')
    input.type = 'text'
    input.id = nombre
    input.placeholder = 'Escribe algo...'
    return input
}


function crearInputPassword() {
    const nombre = prompt("Introduce el nombre e id del input de tipo contraseña:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const input = document.createElement('input')
    input.type = 'password'
    input.id = nombre
    input.placeholder = 'Introduce tu contraseña'
    return input
}

function crearTextarea() {
    const nombre = prompt("Introduce el nombre e id del textarea:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const textarea = document.createElement('textarea')
    textarea.id = nombre
    textarea.cols = 40
    textarea.rows = 5
    return textarea
}

function crearLabel() {
    const nombre = prompt("Introduce el nombre e id  al que va referido el label:")
    const texto = prompt("Introduce el texto del label:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const label = document.createElement('label')
    label.htmlFor = nombre
    label.textContent = texto
    return label
}

function crearImagen() {
    const ruta = prompt("Introduce la ruta de la imagen:")
    const nombre = prompt("Introduce el nombre e id de la imagen:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const img = document.createElement('img')
    img.src = ruta
    img.id = nombre
    return img
}


function crearCheckbox() {
    const nombre = prompt("Introduce el nombre del checkbox:")
    const valor = prompt("Introduce el valor del checkbox:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = nombre
    checkbox.value = valor
    return checkbox
}

function crearRadio() {
    const nombre = prompt("Introduce el nombre del radio:")
    const valor = prompt("Introduce el valor del radio:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = nombre
    radio.value = valor
    return radio
}


function crearBotonSubmit() {
    const nombre = prompt("Introduce el nombre e id del botón submit:")
    const valor = prompt("Introduce el texto del botón submit:")
    if (verificarExistencia(nombre, nombre)) {
        alert("El nombre o id ya está en uso.")
        return
    }

    const boton = document.createElement('button')
    boton.type = 'submit'
    boton.id = nombre
    boton.textContent = valor
    return boton
}
export {
    crearInputText,
    crearInputPassword,
    crearTextarea,
    crearLabel,
    crearImagen,
    crearCheckbox,
    crearRadio,
    crearBotonSubmit
};
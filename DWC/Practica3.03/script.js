'use strict'
// recojo el botón del form
const botonAgregar = document.getElementById('boton-agregar')
const areaTarea = document.getElementById('text-area-tarea-nueva')
const todoDiv = document.getElementById('div-todo')
const archivoDiv = document.getElementById('div-do')
const mostrarOcultos = document.getElementById('boton-mostrar')


botonAgregar.onclick = anadirTarea
mostrarOcultos.onclick = mostrarArchivados


function mostrarArchivados() {
    const ocultos = document.querySelectorAll('.ocultar')
    ocultos.forEach((elemento) => {
        elemento.classList.remove('ocultar')
    })
}


function crearBoton(texto, clase, onclick) {
    const boton = document.createElement('button')
    boton.innerText = texto
    boton.classList.add(clase)
    boton.onclick = onclick
    return boton
}

function botonBorrar() {
    return crearBoton('Borrar', 'boton-borrar', (event) => {
        const divABorrar = event.target.parentNode
        divABorrar.remove()
    })
}

function botonVolver() {
    return crearBoton('Volver', 'boton-volver', (event) => {
        const bBorrar = botonBorrar()
        const bAcabar = botonAcabar()
        const divAVolver = event.target.parentNode
        const bArchivar = divAVolver.querySelector('.boton-archivar')

        if (bArchivar) {
            bArchivar.remove()
        }

        event.target.remove()
        divAVolver.appendChild(bBorrar)
        divAVolver.appendChild(bAcabar)
        todoDiv.appendChild(divAVolver)
    })
}

function botonAcabar() {
    return crearBoton('Acabar', 'boton-acabar', (event) => {
        const bArchivar = botonArchivar()
        const bVolver = botonVolver()
        const divAAcabar = event.target.parentNode

        divAAcabar.classList.add('tarea-archivada')
        divAAcabar.appendChild(bVolver)
        divAAcabar.appendChild(bArchivar)

        const botonBorrar = divAAcabar.querySelector('.boton-borrar')
        if (botonBorrar) {
            botonBorrar.remove()
        }
        event.target.remove()
        archivoDiv.appendChild(divAAcabar)
    })
}

function botonArchivar() {
    return crearBoton('Archivar', 'boton-archivar', (event) => {
        const divArchivar = event.target.parentNode
        divArchivar.classList.add('ocultar')
    })
}

// Creador de div
function crearDiv() {
    const bBorrar = botonBorrar()
    const bAcabar = botonAcabar()
    const divTarea = document.createElement('div')
    divTarea.classList.add('tarea-todo')
    const pTarea = document.createElement('p')

    divTarea.appendChild(pTarea)
    divTarea.appendChild(bBorrar)
    divTarea.appendChild(bAcabar)
    todoDiv.appendChild(divTarea)
    return divTarea
}

function anadirTarea() {
    if (areaTarea.value.trim() !== '') {
        const tarea = crearDiv()
        tarea.firstChild.innerText = areaTarea.value
        areaTarea.value = ''
    } else {
        alert('El cuadro de texto no puede estar vacio.')
    }
}

'use strict'
// a este ejercicio no le he separado la lógica para entenderlo mejor
document.addEventListener('DOMContentLoaded', () => {
    const papelera = document.getElementById('papelera')
    const papel = document.getElementById('papel')
    const papel2 = document.getElementById('p')
    const contennedorPapelera = document.getElementById('contenedor-papelera')

    // es necesario darles la propiedad dragable a true
    contennedorPapelera.draggable = true
    papel.draggable = true
    papel2.draggable = true
    contennedorPapelera.ondragover = (evento) => { // necesario para que pueda aceptar eventos.
        evento.preventDefault() // Permite que el evento "drop" funcione
    }

    contennedorPapelera.ondrop = (evento) => { // el evento es que le están volando por encima
        evento.preventDefault()
        var data = evento.dataTransfer.getData('text')  // puedo recoger el id para condicionales
        var elemetoRecivido = document.getElementById(data) // recojo el papel para poder borrarlo
        if (data === 'papel') {
            papelera.src = './llena.png'
            elemetoRecivido.remove()
        }
    }

    papel.ondragstart = (evento) => { // ondragstart para recoger el id
        evento.dataTransfer.setData('text', evento.target.id) // primer param clave(string) 2 param lo que recoge
    }

})


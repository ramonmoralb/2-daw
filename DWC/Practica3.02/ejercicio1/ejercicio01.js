'use strict'
var nodosBody = document.body.childNodes

function evaluacionContenido(nodo, censura) {
    return nodo.textContent.match(censura)
}

function censor(document, palabraACendurar) {
    var nodosBody = document.body.childNodes
    nodosBody.forEach(nodo => {
        if (evaluacionContenido(nodo, palabraACendurar)) {
            var nuevoNodo = document.createElement('h4');
            nuevoNodo.textContent = 'Contenido bloqueado'
            nuevoNodo.classList.add('contenido-bolqueado')
            nodo.replaceWith(nuevoNodo)
        }
    })
}
censor(document, 'sexo')






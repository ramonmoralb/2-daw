'use strict'
/* clidNodes devuelve modulosNode más complejo*/
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


/** otra manera
const body = document.body.getElementsByTagName('*')
console.log(body)

for (let i = 0; i < body.length; i++) {
    if (body[i].innerHTML.includes('sexo')) {
        body[i].innerHTML = body[i].innerHTML.replace(/sexo/g, '<span>Contenido bloqueado</span>')
    }
}*/
censor(document, 'sexo')






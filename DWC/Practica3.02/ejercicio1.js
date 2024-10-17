'use strict'
var nodosBody = document.body.childNodes
function evaluacionContenido(nodo, censura) {
    return nodo.textContent.match(censura)
}
nodosBody.forEach(nodo => {
    if (evaluacionContenido(e, 'sexo')) {
        console.log(nodo.textContent)
        var nuevoNodo = document.createElement('h4');
        nuevoNodo.style.color = 'red';
        nuevoNodo.style.fontWeight = 'bold';
        nuevoNodo.style.fontStyle = 'italic';
        nuevoNodo.textContent = 'Contenido bloqueado'
        e.replaceWith(nuevoNodo)
    }
})





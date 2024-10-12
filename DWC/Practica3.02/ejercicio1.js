'use strict'
var body = document.body;
var tiposDeNodos = body.childNodes // devuelve nodelist
var nodosDeTexto = []

// recupera los nodos de texto, 
console.log(tiposDeNodos)
for (let i = 0; i < tiposDeNodos.length; i++) {
    if (tiposDeNodos[i].nodeType === Node.TEXT_NODE) {
        nodosDeTexto.push(tiposDeNodos[i])
    }
}
console.log(nodosDeTexto)
// ! siguiente-> buscar en el contenido la palabra a censurar



//! siguiente-> b remmplazar palabra y modicar tamaño y color

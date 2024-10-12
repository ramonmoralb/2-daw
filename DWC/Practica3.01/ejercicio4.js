'use strict'
function insertAfter(nuevoElemento, elementoExixtente) {
    // al elemento recibido del dom ha continuación con afterEnd se le añade un nuevo elemento
    elementoExixtente.insertAdjacentElement("afterend", nuevoElemento)
}

// elemento del DOM devuelve una colecciónn
var elementosDelDom = document.getElementsByTagName('h2')
// selecciono uno en concreto
var elementoDelDom = elementosDelDom[1]

//creo un nuevo elemento
var elementoNuevo = document.createElement('p')
elementoNuevo.innerText = 'Este el contenido elemento nuevo'
//prueba
insertAfter(elementoNuevo, elementoDelDom)
'use strict'
/**Importante muchos metodos devuelven colecciones, se necesita acceder a un elemento en concreto */

function insertAfter(nuevoElemento, elementoExixtente) {
    // busca el padre del elemento existente en el dom
    var parent = elementoExixtente.parentNode
    // con nextSibling(siguiente hermano) añade a continuación
    parent.insertBefore(nuevoElemento, elementoExixtente.nextSibling)

}


// elemento del DOM devuelve una colccion
var elementosDelDom = document.getElementsByTagName('h2')
// selecciono uno en concreto
var elementoDelDom = elementosDelDom[1]

//creo un nuevo elemento
var elementoNuevo = document.createElement('p')
elementoNuevo.innerText = 'Este el elemento nuevo'
//prueba
insertAfter(elementoNuevo, elementoDelDom)
'use strict'
function agregarNumero() {

    var lista = document.querySelector('ul')
    var nuevoElemento = document.createElement('li')
    nuevoElemento.innerText = Math.floor(Math.random() * 1000)
    lista.insertBefore(nuevoElemento, lista.firstChild)
}
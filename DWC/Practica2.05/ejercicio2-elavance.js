'use strict'
const { buscadorItemRepetido, nueveAleatorios } = require('./ejercicio1-elinicio.js')
// creador de arrays con la longitud pasada por param
function creadorArray(long) {
    return new Array(long);
}

// función para crear un array bidimensional de 3x3, el cual llena sus posiciones con números aleatorios , reutilizando nueveAleatorios() del ej1
function arrayBi() {
    // reutilizado de ejercicio 1 devuelve array aleatorio de 9 items entre 1 y 9
    const nueveAleatorio = nueveAleatorios()

    let indice = 0
    // uso el metodo creador de array para crear un array de 3
    let array = creadorArray(3)
    for (let i = 0; i < array.length; i++) {
        array[i] = creadorArray(3)
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            //  recibe en cada posición un item del array aleatorio
            array[i][j] = nueveAleatorio[indice]
            indice++
        }
    }
    return array
}

function repetidosBidimensional(arrBi) {
    //flat() concatena los elementos de un array bidmensional en un solo array
    // reutilizo código de ejercicio 1
    return buscadorItemRepetido(arrBi.flat())
}

let arraVacio = arrayBi()
let repetidos = repetidosBidimensional(arrayBi())
console.log(arraVacio)
console.log(repetidos)


'use strict'
function nueveAleatorios() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    //  Fisher-Yates método encontrado en stackOverflow el cual retorna el array desordenado, sin repetir valores.
    // chequeado y comprobado, además de estudiado su lógica

    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros
}


function buscadorItemRepetido(arr) {
    if (!Array.isArray(arr)) throw new Error('El parametro recibido no es un array')
    if (arr.length !== 9) throw new Error('El array que recibe debe tener 9 items.')

    for (let i = 0; i < arr.length; i++) {
        // itera sobre las posiciones chequeando el valor de la pos actual si hay item repetido devuelve false
        let pos = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (pos === arr[j]) return false
        }
    }
    return true
}

module.exports = { buscadorItemRepetido, nueveAleatorios }
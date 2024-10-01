'use strict'
function arrayAleatorio() {
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push(Math.floor((Math.random() * 9) + 1))
    }
    return array
}

function repetido(arr) {
    if (!Array.isArray(arr)) throw new Error('El parametro recibido no es un array')
    if (arr.length !== 9) throw new Error('El array que recibe debe tener 9 items.')

    for (let i = 0; i < arr.length; i++) {
        let pos = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (pos === arr[j]) return false
        }
    }
    return true
}

module.exports = { repetido }
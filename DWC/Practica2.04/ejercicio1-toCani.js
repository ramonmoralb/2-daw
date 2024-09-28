'use strict'
var cadena = 'cadena de texto'
function toCAni(str) {
    return str.split('')  // separo la cadena en un array en el cual cada posición contien un caracter
        .map(c => c === 'c' ? c = 'k' : c) // mapeo y transformo c en k
        .map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLocaleLowerCase()) // alterno mayúculas y minúsculas
        .join('') // uno el array en String
        .concat('HHHH') // concateno
}
const cani = toCAni(cadena)
console.log(cani)
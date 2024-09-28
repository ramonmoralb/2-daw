'use strict'
var cadena = 'cadena de texto'
function toCani(str) {
    return str
        .toLocaleLowerCase()
        .split('')  // separo la cadena en un array en el cual cada posición contien un caracter
        .map(c => c === 'c' ? c = 'k' : c) // mapeo y transformo c en k
        .map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLocaleLowerCase()) // alterno mayúculas y minúsculas
        .join('') // uno el array en String
        .concat('H'.repeat(Math.floor(Math.random() * 3) + 3)) // concateno
}


const cani = toCani(cadena)

console.log(cani)

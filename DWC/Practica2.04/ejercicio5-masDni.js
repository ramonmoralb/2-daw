'use strict'

const minDni = 48357001
const maxDni = 48360000
const letrasDnis = 'TRWAGMYFPDXBNJZSQVHLCKE'
// reutilizado de ejercicio 3
function calcularLetra(dni) {
    return letrasDnis.charAt(dni % 23)
}
function imprimirDnis(dnis, letra) {
    console.log(`Entre ${minDni} y ${maxDni} hay un toral de ${dnis.length} dnis con la ${letra} `)
    console.log(dnis.join(' '))

}
function calcularNumeroDni(letra) {
    const dnis = []
    for (let dni = minDni; dni < maxDni; dni++) {
        const l = calcularLetra(dni)
        if (l === letra) {
            dnis.push(dni.toString().concat(letra))
        }
    }
    imprimirDnis(dnis, letra)
}
calcularNumeroDni('H')
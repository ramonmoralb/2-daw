'use strict'

const minDni = 48357001
const maxDni = 48360000
const letrasDnis = 'TRWAGMYFPDXBNJZSQVHLCKE'

function calcularLetra(dni) {
    return letrasDnis.charAt(dni % 23)
}

function calcularNumeroDni(letra) {
    const dnis = []

    for (let dni = minDni; dni < maxDni; dni++) {
        const l = calcularLetra(dni)
        if (l === letra) {
            dnis.push(dni.toString().concat(letra))
        }
    }
    return dnis
}
const conH = calcularNumeroDni('H')
console.log(conH.length)
console.log(conH)

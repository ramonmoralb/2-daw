'use strict'
const rangoAbuscar = 100000
function generadorDeArrays(rango) {
    const arr = []
    for (let i = 0; i < rangoAbuscar; i++) {
        arr.push(i)
    }
    return arr
}
function esPrimo(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
function esCapicua(n) {
    const strNum = n.toString()
    return strNum === strNum.split('').reverse().join('')
}

const numeros = generadorDeArrays(rangoAbuscar)

const primosYCapicuas = numeros.filter(n => esPrimo(n) && esCapicua(n))
console.log(primosYCapicuas)
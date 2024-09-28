'use strict'
const letrasDnis = 'TRWAGMYFPDXBNJZSQVHLCKE'
function calcularLetra(dni) {
    // devuelve la letra del string correspondiente a la operación
    return letrasDnis.charAt(Number.parseInt(dni) % 23)
}
function validar(value) {
    return value.length !== 8 || isNaN(Number.parseInt(value))
}
function ponerLetra() {
    var dni = prompt('Introduzca número de dni sin letra, introduza -1 para salir:')
    if (dni === '-1') return clearInterval(inter), console.log('Saliendo.....')
    if (validar(dni)) return
    dni = dni.concat(calcularLetra(dni))
    console.log(dni)
}
const inter = setInterval(ponerLetra, 5000)



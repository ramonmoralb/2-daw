'use strict'
// funciones del objeto discente
function functionImprimirInforme() {
    console.log('ID:', this.id)
    console.log('Nombre:', this.nombre)
    console.log('Aficiones:', this.imprimirAficiones())
    console.log('Notas:', 'Primera evaluación', this.notas.primeraEvaluacion.toString(), 'Segunda evaluación', this.notas.segundaEvaluacion.toString(), 'Tercera evaluación', this.notas.terceraEvaluacion.toString())
    console.log('Media: ', this.calcularMedia())
}
function functionCalcularMedia() {
    const { primeraEvaluacion, segundaEvaluacion, terceraEvaluacion } = this.notas
    const p = ((primeraEvaluacion + segundaEvaluacion + terceraEvaluacion) / 3)
    return p.toFixed(2)
}
function functionImprimirAficiones() {
    return this.aficiones.join(' - ')
}

// objeto 
const discente = {
    id: 1,
    nombre: 'Antonio Sanchez Moraira',
    aficiones: ['Música', 'Tenis', 'Fotografia'],
    notas: {
        primeraEvaluacion: 7,
        segundaEvaluacion: 8,
        terceraEvaluacion: 9
    },
    //funciones
    calcularMedia: functionCalcularMedia,
    imprimirAficiones: functionImprimirAficiones,
    imprimirInforme: functionImprimirInforme
}
const discente2 = {
    id: 2,
    nombre: 'Ramón Moreno Albert',
    aficiones: ['Gamming', 'Astrologia', 'Fotografia'],
    notas: {
        primeraEvaluacion: 10,
        segundaEvaluacion: 10,
        terceraEvaluacion: 9.5
    },

    calcularMedia: functionCalcularMedia,
    imprimirAficiones: functionImprimirAficiones,
    imprimirInforme: functionImprimirInforme
}
console.log(typeof discente)

//exporto los objetos
module.exports = { discente, discente2 }
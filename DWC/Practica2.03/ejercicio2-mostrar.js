'use strict'
const { Curso } = require('./ejercicio1-constructor.js')

const PROGRAMACION = Curso('Programación de 1ª', '2023-2024', 'Java', ['Juan', 'Pepe', 'María'])
function mostrar(curso) {

    if (!curso) return console.log('No se ha pasado ningun curso')
    console.log('TIPO'.padEnd(15), 'NOMBRE'.padEnd(21), 'VALOR')
    for (var props in curso) {
        var tipo = typeof curso[props]
        var nombre = props.padEnd(21)
        var valor = Array.isArray(curso[props]) ? curso[props].join(' ') : curso[props]
        console.log(tipo.padEnd(15), nombre.padEnd(21), valor.padEnd(45))
    }

}
mostrar()
mostrar(PROGRAMACION)
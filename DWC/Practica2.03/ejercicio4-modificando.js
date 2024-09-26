'use strict'
// importo los objetos
const { discente, discente2 } = require("./ejercicio3-discente")

//discente.id = 7

function curso() {
    // compruebo los argumentos para verificar la firma, si no imprimo el error
    if (arguments.length !== 3) return console.log('Parametros incorrectos debe introducir: curso, año del curso y descripción del curso')

    const nombreCurso = arguments[0]
    const anoCurso = arguments[1]
    const descripcionCurso = arguments[2]
    return {
        nombre: nombreCurso,
        anoCurso: anoCurso,
        descripcionCurso: descripcionCurso,
        alumnado: [],
        matricular: function (dis) {
            // ... propaga todos los items, y dis añade 
            this.alumnado = [...this.alumnado, dis]
        }
    }
}
const cursoSin = curso('SIN Primero DAW', 1888, 'Cusro intensivo con subneting')
// añado dos objetos para comprobar el funcionamiento
cursoSin.matricular(discente)
cursoSin.matricular(discente2)
function printCusro(curso) {
    const { nombre, anoCurso, descripcionCurso, alumnado } = curso
    console.log('Curso        :'.padEnd(4), nombre)
    console.log('Año          :'.padEnd(4), anoCurso)
    console.log('----------------------------')
    console.log('Amumnado:')
    alumnado.map(a => a.imprimirInforme())
}
printCusro(cursoSin)




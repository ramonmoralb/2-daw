'use strict'
function Curso(nombre, ano, descripcion, alumnado) {
    return {
        // ?? operador de coalescencia nula (nullish coalescing operator) si encuentra null o undefined ejecuta el codigo a su derecha 
        nombre: nombre ?? 'Sin datos',
        ano: ano ?? 'Sin datos',
        descripcion: descripcion ?? 'Sin datos',
        //Comprueba si el parametro alumno es un array, si no lo convierte, evita problemas en futuras iteracionnes, (al iterar sobre algo no iterable rompería el programa)
        alumnado: alumnado ? Array.isArray(alumnado) ? alumnado : [alumnado] : 'Sin alumnos'
    }
}
const DB = Curso('Base de Datos', '1999', 'Sql y mongoDB', ['Juan', 'Pepe'])

module.exports = { Curso }


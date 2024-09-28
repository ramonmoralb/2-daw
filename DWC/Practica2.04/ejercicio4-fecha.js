'use strict'
var date = new Date()
const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
]


const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]
function fecha() {
    console.log(dias[date.getDay()], ',', date.getDate().toString(), ' de ', meses[date.getMonth()], ' de ', date.getFullYear().toString())
}


const intervalo = setInterval(fecha, 3000)
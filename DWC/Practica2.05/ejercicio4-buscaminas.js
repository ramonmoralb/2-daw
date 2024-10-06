'use strict'
var tablero =
    [[-1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 0, 0]]

function minasAdyacentes(tablero) {
    var columna = tablero[0].length
    var filas = tablero.length
    let tableroMinas = [] // albergará el tablero con el resultado
    for (let i = 0; i < filas; i++) {
        tableroMinas[i] = []
        for (let j = 0; j < columna; j++) {
            // mantiene las minas en su lugar
            if (tablero[i][j] === -1) {
                tableroMinas[i][j] = -1
            } else {
                tableroMinas[i][j] = colocarMinas(tablero, i, j)
            }
        }
    }
    return tableroMinas
}
//funcion que recibe el tablero y la posicion de la mina usa un contador para sumar minas a la posición
function colocarMinas(tablero, fila, columna) {

    let minas = 0;
    let filas = tablero.length
    let columnas = tablero[0].length

    // recorre las posiciones que rodean cada posicion del tablero
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i < filas && j >= 0 && j < columnas && (i !== fila || j !== columna)) {
                //si la posicion del tablero contiene mina suma 1 a los adyacentes
                if (tablero[i][j] === -1) {
                    minas++
                }
            }
        }
    }
    return minas
}

const a = minasAdyacentes(tablero)
console.log(a)
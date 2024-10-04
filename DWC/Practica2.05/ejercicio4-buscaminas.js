/**Ejercicio 4 - Buscaminas
Escribe una función que calcule la cantidad de minas adyacentes para el juego del
Buscaminas. Puedes ver cómo funciona el juego aquí, y si no te queda claro puedes echar una
partida aquí.
Esta función recibe un array bidimensional con la posición de las minas (valor 0 donde NO hay
mina y valor -1 donde SÍ hay mina). Con él, genera otro array bidimensional con la cantidad de
minas que hay en las celdas adyacentes. En las celdas que hay una mina se guarda un valor -1
(igual que en el array de entrada) y, en las que no, el número que indica las minas adyacentes.
Por ejemplo, recibiendo esta entrada:
[-1, 0, 0, 0]
[ 0, 0, 0, 0]
[ 0,-1, 0, 0]
[ 0, 0, 0, 0]
se produce esta salida por pantalla:
[-1, 1, 0, 0]
[ 2, 2, 1, 0]
[ 1,-1, 1, 0]
[ 1, 1, 1, 0] */
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
//funcion que recibe el tablero y la posicion de la mina usara un contador para sumar minas a la posición
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
'use strict'
const { repetido } = require('./ejercicio1-elinicio.js')
var sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6]
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3]
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8]
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5]
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2]
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7]
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4]
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1]

var sudokuIncorrecto = []
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9]
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6]
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3]
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8]
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5]
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2]
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7]
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4]
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1]

// comprueba las lineas horizontales
function comprobarLineasHorizontales(sudoku) {
    // mapea las 9 lineas retorna true si es correcto y falso si no lo es 
    const lineasHorizontales = sudoku.map(repetido)
    // si incluye algun falso en el mapa anterior devuelve false
    const comprobacion = !lineasHorizontales.includes(false)
    return comprobacion
}

//comprueba las lineas verticales
function comprobarLineasVerticales(sudoku) {
    //itera sobre las lineas verticales, si encuentra algún false, devulve false
    for (let col = 0; col < sudoku.length; col++) {
        for (let linea = 0; linea < sudoku.length; linea++) {
            let pos = sudoku[col][linea]
            for (let k = linea + 1; k < sudoku.length; k++) {
                if (sudoku[col][k] === pos) return false
            }
        }
    }
    return true
}

// convierte ecada cuadro en un array, devuelve array de cuadros y lo puedo comprobar con ()conprobar lineas horizontales
function crearCuadrados(sudoku) {
    let cuadrados = []
    // saltos de 3 en tres tanto en filas como columnas
    for (let fila = 0; fila < 9; fila += 3) {
        for (let col = 0; col < 9; col += 3) {
            let cuadrado = [];
            // cada salto añade 
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    cuadrado.push(sudoku[fila + i][col + j])
                }
            }
            //añade cuadro para chequearlo posteriormente
            cuadrados.push(cuadrado)
        }
    }
    return cuadrados
}

function comprobarSudoku(sudoku) {
    if (!Array.isArray(sudoku) || sudoku.length !== 9) return console.error('El sudoku introducido no es correcto.')

    // devuelve true si es correcto y false si no lo es
    return comprobarLineasHorizontales(sudoku) && comprobarLineasVerticales(sudoku) && comprobarLineasHorizontales(crearCuadrados(sudoku))
}
//comprobaciones
const comprobacionFinalCorrecta = comprobarSudoku(sudokuCorrecto) // recibe sudoku correcto
console.log('Comprobación final correcta: ', comprobacionFinalCorrecta)
console.log('----------------------------')
const comprobacionFinalIncorrecta = comprobarSudoku(sudokuIncorrecto)// recibe sudoku incorrecto
console.log('Comprobación final incorrecta: ', comprobacionFinalIncorrecta)
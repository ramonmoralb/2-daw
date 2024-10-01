/**Ejercicio 3 - Descomponiendo el problema III: el sudoku
Con todas las funciones elaboradas en los dos ejercicios anteriores, haz un programa que sea
capaz de comprobar que la solución a un sudoku es correcta. Puedes generar funciones nuevas
si así lo estimas oportuno. Esta función recibirá por parámetro el array con los valores del sudoku
(uno de nueve por nueve) y devolverá true o false en función de si es correcto o no.
Ten presente que un sudoku es un array bidimensional de nueve filas por nueve columnas que
a su vez se puede dividir en nueve arrays bidimensionales de tres por tres.
A continuación, dispones de un sudoku válido e invalido para hacer las pruebas. La explicación
de las reglas del Sudoku se puede consultar aquí. Deberás comprobar que cumple la regla de
las filas, de las columnas y opcionalmente los bloques de 3 */
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
const lhorCorrecto = comprobarLineasHorizontales(sudokuCorrecto)
const lhorIncorrecto = comprobarLineasHorizontales(sudokuIncorrecto)

console.log('lineas horizontales  correctas: ', lhorCorrecto)
console.log('lineas horizontales  incorrectas: ', lhorIncorrecto)
console.log('---------------------')

//comprueba verticales
function comprobarLineasVerticales(sudoku) {
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
const lineasVerticalesCorr = comprobarLineasVerticales(sudokuCorrecto)
console.log(' lineas verticales correctas:', lineasVerticalesCorr)
const lineasVerticalesIncorr = comprobarLineasVerticales(sudokuIncorrecto)
console.log(' lineas verticales Incorrectas:', lineasVerticalesIncorr)
console.log('---------------------')

// convierte el cada cuadro en un array, devuelve array de cuadros y lo puedo comprobar con conprobar lineas horizontales
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
            //añade cuadro para crequearlo posteriormente
            cuadrados.push(cuadrado)
        }
    }

    return cuadrados;
}
const arrayCuadradosCorrectos = crearCuadrados(sudokuCorrecto)
const comprobacionCuadradosCorr = comprobarLineasHorizontales(arrayCuadradosCorrectos)
console.log('cuadrados correcos: ', comprobacionCuadradosCorr)
const arrayCuadradosIncorrectos = crearCuadrados(sudokuIncorrecto)
const comprobacionCuadradosIncorr = comprobarLineasHorizontales(arrayCuadradosIncorrectos)
console.log('cuadrados incorrecos: ', comprobacionCuadradosIncorr)

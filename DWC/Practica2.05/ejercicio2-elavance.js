
/*Ejercicio 2 - Descomponiendo el problema II: el avance
Crea otras dos funciones con idéntico comportamiento que las anteriores, pero en esta ocasión
los arrays con los que trabajará serán bidimensionales:
• la primera creará un array bidimensional de tres por tres en el que ningún número debe
repetirse. Devolverá ese array.
• la segunda recibe un array de tres por tres y tiene alguno de sus nueve números
repetido. Esta función devolverá true si existe alguna repetición y false si no la tiene.
Para crear un array bidimensional en JavaScript debes usar un array de arrays de este modo:
*/
function creadorArray(long) {
    return new Array(long);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function nueveAleatorios(numeros) {


    //  Fisher-Yates método en encontrado en stackOverflow el cual retorna el array desordenado, sin repetir valore
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros
}


// Función para crear un array bidimensional vacío de 3x3
function arrayBi() {
    var count = 1
    let array = creadorArray(3) // Crea un array de 3 elementos
    for (let i = 0; i < array.length; i++) {
        array[i] = creadorArray(3)
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = count++
        }
    }
    return array
}

function repetidosBi(arrBi) {
    //flat() concatena los elementos de un array bidmensional en un array
    // reutilizo código de ejercicio 1
    let arrayAchequear = arrBi.flat()
    for (let i = 0; i < arrayAchequear.length; i++) {
        let pos = arrayAchequear[i]
        for (let j = i + 1; j < arrayAchequear.length; j++) {
            if (pos === arrayAchequear[j]) return false
        }
    }
    return true // true si no hay reoetidos
}
let p = arrayBi();
let repes = repetidosBi([[1, 2], [2, 5]])
console.log(repes)
console.log(p)

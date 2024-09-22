'use strict'
function arrayAleatorio(longitud) {
    // Devuelce un nuevo array con números aleatorios entre 0 y 100
    return new Array(longitud).fill(0).map(() => (Math.floor(Math.random() * 100) + 1));
}

function sumaAlReves(a1, a2) {
    if (a1.length != a2.length) return console.error('ERROR: Los arrays no tienen la misma longutud')
    // Invierte los elementos del array
    const a3 = a2.reverse()
    // Devuelve un nuevo array con la suma de los obtenidos en los parametros
    return a1.map((element, index) => element + a3[index])
}
function print(array) {
    // Imprime el array separando los elementos con una barra
    console.log(array.join(' - '))
}
// Recibe tres funciones por parametro
function calcular(fn1, fn2, fn3) {
    const longitud = 7;
    // Genera dos arrays aleatorios
    const aleatorio1 = fn1(longitud)
    const aleatorio2 = fn1(longitud)
    // Utiliza la segunda función para calcular el resultado
    const result = fn2(aleatorio1, aleatorio2)
    // Utiliza la tercera función para imprimir por consola
    fn3(aleatorio1)
    fn3(aleatorio2)
    console.log(' +  ________________________')
    fn3(result)
}

calcular(arrayAleatorio, sumaAlReves, print)









'use strict'
/**Ejercicio 2 - Temporizador 
Diseña una función temporizador que reciba como dos parámetros: minutos y segundos. Cada 
segundo mostrará por consola el tiempo que le queda al temporizador hasta llegar a cero. En 
el  caso  que  sólo  reciba  un  parámetro,  considerará  que  son  los  segundos  desde  donde 
comenzará la cuenta atrás. La función se llamará de este modo: 
function temporizador(minutos, segundos); 
 
Por  ejemplo  temporizador(2,50);  indica  2  minutos  y  50  segundos.  Si  alguno  de  los  valores  que 
recibe  como  parámetros  son  negativos,  de  un  tipo  inesperado  o  los  segundos  superan  el 
número 59, la función debe lanzar un error insultando informando al usuario. 
La salida del temporizador debe estar debidamente formateada. 
Para establecer el intervalo de repetición de la función emplear setInterval del siguiente modo 
const id = setInterval(actualizarReloj, 1000); 
 
Cuando el temporizador llegue a cero deberemos parar las repeticiones, usar: 
clearInterval(id);  */


function temporizador(minutos, segundos) {
    if (!Number.isInteger(minutos) || (segundos !== undefined && !Number.isInteger(segundos))) { throw new Error(' Minutos y sgundos eben de ser números enteros.') }
    if (minutos < 0 || segundos < 0) { throw new Error('Los parámetros no pueden ser negativos') }

    // obtengo un array con minutos en pos 0 y seg en pos 2 
    let reloj = [minutos, segundos]
    //si solo recibe un parámetro ajusta las posiciones para que sean los segundos
    if (reloj[1] === undefined) {
        reloj[1] = reloj[0]
        reloj[0] = 0
    }
    if (reloj[1] > 59) { throw new Error('Los segundos no pueden ser más de 59') }
    var totalSegundos = (reloj[0] * 60) + reloj[1]


    const intervalo = setInterval(actualizarReloj, 1000)
    // setInterval(() => { console.log(totalSegundos, 'seg rest'), totalSegundos-- }, 1000)
    function actualizarReloj() {
        console.log(totalSegundos, ' Segundos restantes')
        totalSegundos--
        if (totalSegundos === -1) clearInterval(intervalo)
    }

}

try {
    temporizador('7', 0)
} catch (error) {
    console.log(error.message)
}
try {
    temporizador(1, 20)
} catch (error) {
    console.log(error.message)
}


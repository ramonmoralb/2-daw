/**Ejercicio 3 - Sumando vectores 
Escribe la función calcular() para que maneje tres arrays (no serán pasados como parámetros 
a esta función sino declarados dentro de ella). Lo que sí se pasará como parámetros serán tres 
funciones con el siguiente comportamiento: 
• una  para  generar  un  array  con  números  aleatorios  comprendidos  entre  1  y  100,  la 
cantidad de números generados será pasado como parámetro, 
• otra que recibe dos arrays como parámetros y genera un array que contenga la suma 
de las cifras que ocupen posiciones contrarias, es decir, la primera posición del primero 
sumada a la última posición del segundo (los arrays deben tener la misma longitud), 
• y la última para imprimir un array por consola debidamente formateado. 
La  ejecución  del  programa  se  realizará  a  través  de  la  función  calcular()  del  siguiente  modo: 
calcular(funcion1, funcion2, funcion3); 
Nota: para generar números aleatorios en JavaScript: (Math.floor(Math.random()*100)+1); 
 
 */
function arrayAleatorio(longitud) {
    return new Array(longitud).fill(0).map(() => (Math.floor(Math.random() * 100) + 1));
}




function sumaAlReves(a1, a2) {
    if (a1.length != a2.length) return console.error('ERROR: Los arrays no tienen la misma longutud')
    const a3 = a2.reverse()
    return a1.map((element, index) => element + a3[index])
}
function print(earray) {
    console.log(earray.join(' - '))
}
function calcular(fn1, fn2, fn3) {
    const longitud = 2;
    const aleatorio1 = fn1(longitud)
    const aleatorio2 = fn1(longitud)
    const result = fn2(aleatorio1, aleatorio2)
    fn3(aleatorio1)
    fn3(aleatorio2)
    console.log(' +  ________________________')
    fn3(result)

    // fn3(fn2(fn1(longitud), fn1(longitud)))
}



calcular(arrayAleatorio, sumaAlReves, print)









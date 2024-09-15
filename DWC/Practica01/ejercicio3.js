/**Ejercicio 3 - Números 
Crea una función que reciba dos números por parámetro. El primer número indicará cuantas 
veces se debe imprimir el segundo por pantalla, pero en cada iteración muestra el valor anterior 
multiplicado por 2. Por ejemplo, si recibe 4 y 6 la salida será: 6 12 24 48. 
 */

function numbers(n1, n2) {
    for (let i = 0; n1 > i; i++) {
        console.log(n2)
        n2 = n2 * 2
    }
}
numbers(4, 6)
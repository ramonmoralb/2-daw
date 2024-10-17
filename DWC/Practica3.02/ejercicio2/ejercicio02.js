/**Ejercicio 2 - Primos DOM 
Escribe un programa mediante JavaScript que cree dinámicamente (al cargar la página) una 
tabla de 10 por 10 celdas. Cada celda de la tabla tendrá un número único que empezará en 
uno y se irá incrementando en uno. 
Esta página, además, tendrá un botón encima de la tabla con el texto Calcular números primos, 
que, al pulsarlo, hará que todas las celdas de la tabla que tengan números primos se pongan 
con un fondo rojo y el texto en negrita (utiliza clases). */

'use strict'


function resaltarPrimos() {
    var celdas = document.querySelectorAll('td')
    celdas.forEach((celda) => {
        if (esPrimo(celda.textContent)) {
            celda.classList.add('primo')
        }
    })
}

function esPrimo(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function crearTabla() {
    var tabla = document.createElement('table')
    var boton = document.createElement('button')
    var container = document.getElementById('pr')
    container.appendChild(boton)
    container.appendChild(tabla)
    var contador = 1
    boton.innerText = 'Buscar primos'
    boton.onclick = resaltarPrimos

    for (let i = 0; i < 10; i++) {
        var fila = document.createElement('tr')
        tabla.appendChild(fila)
        for (let j = 0; j < 10; j++) {
            var celda = document.createElement('td')
            celda.innerText = contador
            fila.appendChild(celda)
            contador++
        }
    }
}
crearTabla()
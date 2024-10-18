
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
var tabla = document.getElementById('bodyTabla')
// copiada de ejercicos anteriores
function toCani(str) {
    return str
        .toLocaleLowerCase()
        .split('')  // separo la cadena en un array en el cual cada posición contien un caracter
        .map(c => c === 'c' ? c = 'k' : c) // mapeo y transformo c en k
        .map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLocaleLowerCase()) // alterno mayúculas y minúsculas
        .join('') // uno el array en String
        .concat('H'.repeat(Math.floor(Math.random() * 3) + 3)) // concateno
}

function addLinea() {
    // creo los elementos para insertarlos al DOM
    var fila = document.createElement('tr')
    var columnaValor = document.createElement('td')
    var columnaBoton = document.createElement('button')

    // agrega los valores a los elementos
    columnaValor.innerText = document.getElementById('texto').value // valor del input
    columnaBoton.innerText = 'Caniar' // texto al botón
    // puedo acceder a las funcionalidades del botón
    columnaBoton.onclick = () => { columnaValor.innerText = toCani(columnaValor.innerText) } // si no lo hago así lo ejecuta directamente me ha dado muchos problemas
    // añade a fila elementos concatenados
    fila.appendChild(columnaValor)
    fila.appendChild(columnaBoton)
    tabla.insertBefore(fila, tabla.lastChild)
    // limpio el input
    document.getElementById('texto').value = ''
}
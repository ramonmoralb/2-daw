//funciones.js
let color = 'white'
let colores = ['white', 'red', 'yellow', 'blue', 'pink', 'green', 'grey']
let pinta = false
const paleta = document.querySelectorAll('.colores')
const ponerNombre = (c) => {
    const info = document.getElementById('seleccion-color');
    info.style.backgroundColor = c
    info.firstElementChild.innerText = c.toUpperCase()
};

const colocarPaleta = () => {
    for (let i = 0; i < paleta.length; i++) {
        paleta[i].style.backgroundColor = colores[i]
        paleta[i].id = colores[i]
    }
}

const construirLienzo = () => {
    const lienzo = document.getElementById('lienzo')
    const tabla = document.createElement('table')
    tabla.classList.add('tabla')

    for (let i = 0; i < 50; i++) {
        const fila = document.createElement('tr')
        for (let j = 0; j < 60; j++) {
            const celda = document.createElement('td')
            celda.classList.add('celda')
            celda.style.width = '10px'
            celda.style.height = '10px'
            fila.appendChild(celda)
        }
        tabla.appendChild(fila)
    }

    lienzo.appendChild(tabla)
}
const seleccionarColor = () => {
    document.querySelectorAll('.colores').forEach(div => div.addEventListener('click', (e) => {
        color = e.target.id
        ponerNombre(color)

    }))
}
const pintar = () => {
    var celdas = document.getElementsByClassName('celda')
    for (let i = 0; celdas.length > i; i++) {
        celdas[i].addEventListener('click', (e) => { pinta = !pinta, e.target.style.backgroundColor = color, console.log('entra') })
        celdas[i].addEventListener('mouseover', (e) => {
            if (pinta) {
                e.target.style.backgroundColor = color
                console.log('p')
                console.log('no')
            }
        })
    }
}
ponerNombre(color)
export { seleccionarColor, construirLienzo, pintar, ponerNombre, colocarPaleta }
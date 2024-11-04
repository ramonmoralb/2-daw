import { imgRutas } from "../rutas-imagenes/imgenes.js"
const crearTablero = (contenedodorTab) => {
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        div.id = `square${i + 1}`
        contenedodorTab.appendChild(div)
    }
}
const ponerImagenes = (contenedorImg) => {
    var rutasDesordenas = desordenarArray(imgRutas)
    rutasDesordenas.forEach((imgRuta) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        div.classList.add('pieza-puzzle')
        img.src = imgRuta[1]
        div.appendChild(img)
        contenedorImg.appendChild(div)
    })
}
function desordenarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
}
export { crearTablero, ponerImagenes }
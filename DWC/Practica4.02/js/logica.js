'use strict'
const modal = document.getElementById("myModal");


const desordenarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));  // Cambié const a let aquí
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const crearTablero = (contenedorTab, nombreClaseId) => {
    for (let i = 0; i < 9; i++) {
        //crea los divs los cuales deben tener la propiedad dragable
        let div = document.createElement('div')
        div.classList.add(nombreClaseId)
        div.id = nombreClaseId.concat((i + 1).toString())
        // propiedades del tablero
        div.draggable = true
        div.ondragover = (evento) => {
            evento.preventDefault()
        }
        div.ondrop = (evento) => {
            if (evento.target.tagName === 'IMG') { return } // no permite dos imagenes en un div, si ello anida
            var data = evento.dataTransfer.getData('piezaId') // coge lo que se le deja caer
            var pieza = document.getElementById(data)
            evento.target.appendChild(pieza)

            if (comprobarTablero()) {
                puzzleCorrecto()
            }
        }
        contenedorTab.appendChild(div)
    }
}

const ponerImagenesIniciales = (tablero, imagenes) => {
    // seleciono las casillas del contenedor para poder iterar
    const squares = tablero.querySelectorAll('div')
    const imagenesDesordenas = desordenarArray(imagenes)
    imagenesDesordenas.map((img, indice) => {
        var i = document.createElement('img')
        i.src = img[1]
        i.id = img[0]
        i.draggable = true
        i.ondragstart = (evento) => {
            evento.dataTransfer.setData('piezaId', evento.target.id)
        }
        squares[indice].appendChild(i)
    })

}

const comprobarTablero = () => {

    const puzzle = document.getElementById('contenedor-puzzle')
    const squares = puzzle.querySelectorAll('div')

    // comprueba si los dives estan llenos
    for (let square of squares) {
        if (!square.querySelector('img')) {
            return false
        }
    }
    return true
}
const puzzleCorrecto = () => {
    const puzzle = document.getElementById('contenedor-puzzle')
    const squares = puzzle.querySelectorAll('div')
    const modalGanador = document.getElementById('modal-ganador')
    const modalPerdedor = document.getElementById('modal-perdedor')
    for (let square of squares) {
        const img = square.querySelector('img')
        console.log(square.id.charAt(square.id.length - 1))
        console.log(img.id)
        if (img.id != square.id.charAt(square.id.length - 1)) {

            return modalPerdedor.classList.add('modal-mostrar')

        }

    }
    return modalGanador.classList.add('modal-mostrar')
}




const iniciarPartida = (contenedorPuzzle, clasePuzzle, contenedorImg, claseImagnes, imagenes) => {
    crearTablero(contenedorPuzzle, clasePuzzle)
    crearTablero(contenedorImg, claseImagnes)
    ponerImagenesIniciales(contenedorImg, imagenes)
}
const reset = ((contenedorPuzzle, clasePuzzle, contenedorImg, claseImagnes, imagenes) => {
    contenedorPuzzle.innerHTML = ''
    contenedorImg.innerHTML = ''
    iniciarPartida(contenedorPuzzle, clasePuzzle, contenedorImg, claseImagnes, imagenes)
}
)


export { crearTablero, ponerImagenesIniciales, iniciarPartida, reset } 



const crearTablero = (contenedodorTab, nombreClaseId) => {
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
        contenedodorTab.appendChild(div)
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
    for (let square of squares) {
        const img = square.querySelector('img')
        console.log(square.id.charAt(square.id.length - 1))
        console.log(img.id)
        if (img.id != square.id.charAt(square.id.length - 1)) {
            return alert('has perdido')
        }

    }
    return alert('has ganado')
}
// coloca en el html dentro del div las piezas del puzle
//desordena el array con un metodo encontrado en stackoverflow(fisher-yates)



const desordenarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export { crearTablero, ponerImagenesIniciales }
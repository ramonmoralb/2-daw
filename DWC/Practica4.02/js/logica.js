import { imgRutas } from "../rutas-imagenes/imgenes.js"

// crea el tablero con 9div dentro del contendor recibido por param
const crearTablero = (contenedodorTab) => {
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        div.id = `square${i + 1}`
        div.draggable = true
        div.ondragover = (evento) => {
            evento.preventDefault()
        } // le quita las propiedades por defecto, necesario para que acepte eventos


        div.ondrop = (e) => {
            e.preventDefault()
            var data = e.dataTransfer.getData('dataImg')
            var img = document.getElementById(data)
            console.log(e.target)
            var a = e.target
            if (a.firstChild || e.target.tagName === 'IMG') { // ademas evita anidar en img
                // Si ya hay una imagen en la casilla, no permitimos otra
                console.log('Esta casilla ya tiene una pieza')

            } else {

                // recoge los datos de la imagen
                // obtiene el elemento imagen
                e.target.appendChild(img) // añade la imagen a la casilla
            }
            comprobarPuzle() // Verifica si el puzzle está completo
        }
        contenedodorTab.appendChild(div)
    }
}

// coloca en el html dentro del div las piezas del puzle
//desordena el array con un metodo encontrado en stackoverflow(fisher-yates)
const ponerImagenes = (contenedorImg) => {
    var rutasDesordenas = desordenarArray(imgRutas)
    rutasDesordenas.forEach((imgRuta) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        div.classList.add('pieza-puzzle')
        img.classList.add('pieza')
        img.src = imgRuta[1]  // le agrega es soruce de la imagen
        img.id = imgRuta[0] // el id de la imagen de1 1 al 9 se usará para la comprobación

        // esto será un metodo que reciba la imagen
        img.draggable = true
        img.ondragstart = (e) => {

            e.dataTransfer.setData('dataImg', e.target.id)
        }
        div.appendChild(img)
        contenedorImg.appendChild(div)
    })
}
const comprobarPuzle = () => {

    const squares = document.getElementsByClassName('square')
    console.log('d  ', squares[0].id.charAt(squares[1].id.length - 1))
    for (let i = 0; i < squares.length; i++) {

        if (!squares[i].firstChild) {
            return console.log('no winner')
        }
        // arreglar debe mostar ganador cuando los compruebe todos

        if (squares[i].id.charAt(squares[i].id.length - 1) === squares[i].firstChild.id) {
            alert('ganador')
        }
    }


    // si todas las casillas contienen imagen se ececutará
    //debe comprobar si coincide id imagen con squareid


}

function desordenarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array
}
export { crearTablero, ponerImagenes }
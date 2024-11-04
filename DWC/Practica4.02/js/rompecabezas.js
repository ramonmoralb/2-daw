document.addEventListener('DOMContentLoaded', () => {
    const contenedorTab = document.getElementById('contenedor-puzzle')
    const contenedorImg = document.getElementById('contenedor-piezas')
    crearTablero(contenedorTab)
    ponerImagenes(contenedorImg)

})
import { crearTablero, ponerImagenes } from "./logica.js"
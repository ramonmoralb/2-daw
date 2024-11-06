import { imgRutas } from "../rutas-imagenes/imgenes.js"
document.addEventListener('DOMContentLoaded', () => {
    const contenedorTab = document.getElementById('contenedor-puzzle')
    const contenedorImg = document.getElementById('contenedor-piezas')
    crearTablero(contenedorTab, 'square-puzzle')
    crearTablero(contenedorImg, 'square-imagen')
    ponerImagenesIniciales(contenedorImg, imgRutas)

})
import { crearTablero, ponerImagenesIniciales } from "./logica.js"
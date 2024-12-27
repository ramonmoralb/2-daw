'use strict'
import { empezarSaludar, paraSaluar } from "../biblioteca/biblioteca.js"

document.addEventListener("DOMContentLoaded", () => {
    var contenedorH1 = document.getElementById('contenedorh1')
    const botonInicio = document.getElementById('start-saludo')
    const botonParar = document.getElementById('end-saludo')
    botonInicio.addEventListener('click', empezarSaludar)
    botonParar.addEventListener('click', paraSaluar)
})
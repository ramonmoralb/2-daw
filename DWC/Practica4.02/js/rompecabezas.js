'use strict'
import { imgRutas } from "../rutas-imagenes/imgenes.js"
import { iniciarPartida, reset } from "./logica.js"

document.addEventListener('DOMContentLoaded', () => {
    const contenedorTab = document.getElementById('contenedor-puzzle')
    const contenedorImg = document.getElementById('contenedor-piezas')
    const botonReset = document.getElementById('btn-reset')
    const botonGanar = document.getElementById('btn-modal-ganar')
    const botonPerder = document.getElementById('btn-modal-perder')
    iniciarPartida(contenedorTab, 'square-puzzle', contenedorImg, 'square-imagen', imgRutas);
    botonReset.addEventListener('click', () => reset(contenedorTab, 'square-puzzle', contenedorImg, 'square-imagen', imgRutas));
    botonGanar.addEventListener('click', () => {
        reset(contenedorTab, 'square-puzzle', contenedorImg, 'square-imagen', imgRutas)
        const modalGanador = document.getElementById('modal-ganador')
        modalGanador.classList.remove('modal-mostrar')
    });
    botonPerder.addEventListener('click', () => {
        reset(contenedorTab, 'square-puzzle', contenedorImg, 'square-imagen', imgRutas)
        const modalPerderdor = document.getElementById('modal-perdedor')
        modalPerderdor.classList.remove('modal-mostrar')
    });
})

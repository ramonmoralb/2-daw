document.addEventListener('DOMContentLoaded', () => {
    colocarPaleta()
    construirLienzo()
    seleccionarColor()
    pintar()
    resetear()
})
import { construirLienzo, seleccionarColor, pintar, colocarPaleta, resetear } from "../logica/funciones.js"
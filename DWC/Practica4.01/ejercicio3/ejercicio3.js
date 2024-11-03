document.addEventListener('DOMContentLoaded', () => {
    const coordenadas = document.getElementById('coordenadas')
    document.body.addEventListener('mousemove', (evento) => { imprimirCoordenadas(coordenadas, evento) })
})
import { imprimirCoordenadas } from "../biblioteca/biblioteca.js"
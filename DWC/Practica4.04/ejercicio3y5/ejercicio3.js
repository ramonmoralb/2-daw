import { anadirDisco, mostrar } from './funciones3.js'

document.addEventListener('DOMContentLoaded', () => {
    const discos = []
    const formulario = document.getElementById('formulario')
    const botonMostrar = document.getElementById('mostrar')

    formulario.addEventListener('submit', e => {
        e.preventDefault()
        const disco = anadirDisco()
        if (disco) {
            discos.push(disco)
        }
    })
    botonMostrar.addEventListener('click', () => mostrar(discos))

})

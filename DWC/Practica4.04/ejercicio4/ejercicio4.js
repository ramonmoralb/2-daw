import { validarFormulario, actualizarPoblaciones } from "./funciones4.js"
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        validarFormulario()
    })
    const provinciaSeleccionada = document.getElementById('provincia')
    provinciaSeleccionada.addEventListener('change', actualizarPoblaciones)
})
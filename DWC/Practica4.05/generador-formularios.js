import {
    crearInputText,
    crearInputPassword,
    crearTextarea,
    crearLabel,
    crearImagen,
    crearCheckbox,
    crearRadio,
    crearBotonSubmit
} from './funciones.js';
document.addEventListener('DOMContentLoaded', () => {
    const crearCampoBtn = document.getElementById('crearCampo')
    const seleccionarCampo = document.getElementById('elementSelect')
    const formularioGenerado = document.getElementById('formularioGenerado')
    const recogerCamposBtn = document.getElementById('recogerCampos')
    function agregarCampo() {
        const seleccion = seleccionarCampo.value
        let nuevoElemento

        switch (seleccion) {
            case 'text':
                nuevoElemento = crearInputText()
                break
            case 'password':
                nuevoElemento = crearInputPassword()
                break
            case 'textarea':
                nuevoElemento = crearTextarea()
                break
            case 'label':
                nuevoElemento = crearLabel()
                break
            case 'image':
                nuevoElemento = crearImagen()
                break
            case 'checkbox':
                nuevoElemento = crearCheckbox()
                break
            case 'radio':
                nuevoElemento = crearRadio()
                break
            case 'submit':
                nuevoElemento = crearBotonSubmit()
                break
            default:
                alert('Selección no válida')
                return
        }

        if (nuevoElemento) {
            formularioGenerado.appendChild(nuevoElemento)
        }
    }


    function recogerCampos() {
        const camposFormulario = formularioGenerado.children
        let formularioHTML = '<h2>Formulario Generado</h2><form>'

        for (let i = 0; i < camposFormulario.length; i++) {
            formularioHTML += camposFormulario[i].outerHTML + "<br>"
        }

        formularioHTML += '</form>'
        formularioGenerado.innerHTML = formularioHTML
    }

    crearCampoBtn.addEventListener('click', agregarCampo)
    recogerCamposBtn.addEventListener('click', recogerCampos)
})

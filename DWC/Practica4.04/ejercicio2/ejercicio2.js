// archivo principal
import { crearForm, crearSelect, crearOption } from './logica.js'

document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('cont')
    const form = crearForm('formulario', 'id-formularo', 'post')
    cont.appendChild(form)
    const listaOptions = ['Negrita', 'Subrayado', 'Fondo rojo']
    const options = []
    listaOptions.forEach(element => {
        options.push(crearOption(element))
    });
    const select = crearSelect(options)
    form.appendChild(select)


})

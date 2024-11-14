// logica.js
//recibe clase e id

const crearForm = (clase, id, metodo) => {
    const formulario = document.createElement('form')
    formulario.classList.add(clase)
    formulario.method = metodo
    formulario.id = id
    const textArea = crearTextArea('textArea')
    formulario.appendChild(textArea)
    const boton = crearBoton()
    formulario.appendChild(boton)
    formulario.onsubmit = (event) => {
        event.preventDefault()
        const resultado = document.getElementById('resultado')
        const p = document.createElement('p')

        p.innerText = textArea.value
        resultado.appendChild(p)
    }
    return formulario
    // Aquí puedes agregar la lógica para crear el formulario
}
const crearTextArea = (clase) => {
    const textArea = document.createElement('textarea')
    textArea.classList.add(clase)
    return textArea
}
const crearOption = (value) => {
    const opt = document.createElement('option')
    opt.textContent = value
    opt.value = value

    return opt

}
const crearSelect = (options) => {
    const select = document.createElement('select')
    options.forEach(o => {

        select.add(o)
    })
    return select
}
const crearBoton = (texto) => {
    const boton = document.createElement('button')
    boton.type = "submit"
    boton.textContent = texto || "Enviar"
    return boton
}

export { crearForm, crearSelect, crearOption } 

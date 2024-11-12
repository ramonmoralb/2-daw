'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const contenedorCheckbox = document.getElementById('contenedor-checkbox');
    const body = document.body


    const cienCheckbox = () => {
        for (let i = 1; i < 101; i++) {
            let label = document.createElement('label')
            label.innerHTML = i.toFixed()
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.classList.add('check')
            checkbox.id = Math.floor(Math.random() * (1000 - 100) + 100)
            contenedorCheckbox.insertAdjacentElement('beforebegin', label)
            contenedorCheckbox.insertAdjacentElement('beforebegin', checkbox)
        }
    }

    const botonMarcarImpares = document.createElement('button')
    botonMarcarImpares.innerHTML = "marcar impares"
    const botonDesselecionarTodo = document.createElement('button')
    botonMarcarImpares.innerHTML = "marcar impares"
    botonDesselecionarTodo.innerHTML = "desseleccionar"



    contenedorCheckbox.appendChild(botonMarcarImpares)
    contenedorCheckbox.appendChild(botonDesselecionarTodo)
    botonMarcarImpares.onclick = () => {
        let checkBoxs = document.querySelectorAll('.check')
        //marca lo impares
        for (let i = 0; i < checkBoxs.length; i++) {
            if (checkBoxs[i].id % 2 === 0) {
                checkBoxs[i].checked = true
            }
        }
    }
    botonDesselecionarTodo.onclick = () => {
        let checkBoxs = document.querySelectorAll('.check')
        for (let i = 0; i < checkBoxs.length; i++) {

            checkBoxs[i].checked = false
        }
    }

    cienCheckbox()


})


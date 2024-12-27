document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementsByClassName('item-lista')

    acordeon(lista)
    /*    arrayItems.map((item, index) => {
            if (index % 2 !== 0) {
                item.classList.add('ocultar')
            }
        })
    
        arrayItems[0].addEventListener('click', () => { console.log(arrayItems[0].innerHTML) })
        console.log(Array.isArray(arrayItems))
    */
})
import { acordeon } from "../biblioteca/biblioteca.js"
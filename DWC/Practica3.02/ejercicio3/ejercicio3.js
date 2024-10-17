var parrafos = document.getElementsByTagName('p')
var boton = document.createElement('button')
boton.innerText = 'boton'
boton.onclick = () => {
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.remove('oculto')
        // el color del parrafo?
        parrafos[i].classList.remove()
    }
}
document.body.insertAdjacentElement('beforeend', boton)


for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].onclick = function () { this.classList.add('oculto') } // con una función flecha this no funciona, las flechas tienen su propio this

    parrafos[i].onmouseout = function () { parrafos[i].style.backgroundColor = 'black' }
    parrafos[i].innerText = 'Estos son parrafos de pruebba'
}
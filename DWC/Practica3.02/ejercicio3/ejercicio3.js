'use strict'
var parrafos = document.getElementsByTagName('p')
var boton = document.createElement('button')
boton.innerText = 'Restaurar'
boton.classList.add('boton')
// el botón estará oculto hata que se modifique el contenido
boton.classList.add('oculto')
boton.onclick = () => {
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.remove('oculto')
        parrafos[i].style.backgroundColor = ''
    }
    boton.classList.add('oculto')
}
document.body.insertAdjacentElement('beforeend', boton)

function colorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // itera 6 veces sobre el string para hacer color random
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color
}

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].onclick = function () { parrafos[i].classList.add('oculto'), boton.classList.remove('oculto') }
    parrafos[i].onmouseout = function () { parrafos[i].style.backgroundColor = colorAleatorio(), boton.classList.remove('oculto') }
    parrafos[i].innerText = 'Estos son parrafos de pruebba'
}
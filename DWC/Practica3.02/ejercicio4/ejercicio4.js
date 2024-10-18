'use strict'

var imagenes = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg']
var contenedorImagenes = document.getElementById('contenedor-imagenes')
imagenes.forEach(imagen => {
    var tagImagen = document.createElement('img')
    tagImagen.src = imagen
    contenedorImagenes.appendChild(tagImagen)
})
var indiceActual = 0
function mostrarImagen() {

    var imagenesTag = contenedorImagenes.getElementsByTagName('img')
    var opacidad = 0
    for (let i = 0; i < imagenesTag.length; i++) {
        // fuera visibilidad y opacidad al 0 
        imagenesTag[i].classList.remove('visible')
        imagenesTag[i].style.opacity = opacidad
    }
    //el imdice actual le agreega la clase que le da la visibilidad
    imagenesTag[indiceActual].classList.add('visible')
    // intervalo que se ejecuta dentro del tiempo de el intervalo pricipal que aumenta la opacidad en cada ejecución del intervalo
    var intervalo = setInterval(() => {
        opacidad += 0.05
        imagenesTag[indiceActual].style.opacity = opacidad
        if (opacidad >= 1) {
            clearInterval(intervalo)
        }
    }, 50)

    setTimeout(() => { // sin setTimeout, no funciona cambia el indice antes de aplicar el intervalo
        indiceActual = indiceActual + 1
        if (indiceActual === imagenes.length) { // llega al final y vuelve a la primera pos
            indiceActual = 0
        }
    }, 1000)
}


mostrarImagen() // ejecutar primero para que empiece desde el principio sin espera 3seg al intervalo
setInterval(mostrarImagen, 3000)
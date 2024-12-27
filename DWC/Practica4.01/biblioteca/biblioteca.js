//logica ejercico1
var intervalo

const anadirElemento = (elementoPadreID, elemntoAnadirEtiqueta, textoAnadir) => {
    let contenedor = document.getElementById(elementoPadreID)
    let elementoAnadir = document.createElement(elemntoAnadirEtiqueta)
    elementoAnadir.innerHTML = textoAnadir
    contenedor.appendChild(elementoAnadir)

}
const empezarSaludar = () => {
    intervalo = setInterval(() => { anadirElemento('contenedorh1', 'h1', 'feo') }, 2000)
}
const paraSaluar = () => {
    clearInterval(intervalo)
}

//logica ejercicio2
const generarColorAleatorio = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `#${r}${g}${b}`
}
const cambiarColor = (event) => {
    event.target.style.backgroundColor = generarColorAleatorio();
    console.log('click')
}
//logica ejercicio 3
const imprimirCoordenadas = (elemetoImpresion, e) => {
    elemetoImpresion.innerHTML = `posX = ${e.clientX}  ,  posY = ${e.clientY}  `
}
//lógica ejercicio 4
const acordeon = (contenedorElemenos) => {
    for (let i = 0; contenedorElemenos.length > i; i++) {
        if (i % 2 === 0) {
            contenedorElemenos[i].onclick = () => {
                if (contenedorElemenos[i].nextElementSibling.classList.contains('ocultar')) {
                    contenedorElemenos[i].nextElementSibling.classList.remove('ocultar')
                } else {
                    contenedorElemenos[i].nextElementSibling.classList.add('ocultar')
                }
            }
        }
    }
}

export { empezarSaludar, paraSaluar, cambiarColor, imprimirCoordenadas, acordeon }
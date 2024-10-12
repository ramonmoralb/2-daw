'use strict'
// parrafos
var parrafos = document.getElementsByTagName('p')
var parrafo2 = parrafos[1].innerHTML

//enlaces
var enlaces = document.getElementsByTagName('a')
// atributo href y texto de los enlaces
var hrefPrimerEnlace = enlaces[0].getAttribute('href')
var textPrimerEnlace = enlaces[0].innerText

var hrefPenultimoEnlace = (enlaces[enlaces.length - 2]).getAttribute('href')
var textPenultimoEnlace = (enlaces[enlaces.length - 2]).innerText


// creo los anchor y les doy el atributo href y el contenido
var aPrimerEnlace = document.createElement('a')
aPrimerEnlace.setAttribute('href', hrefPrimerEnlace)
aPrimerEnlace.innerHTML = textPrimerEnlace

var aPenultimoEnlace = document.createElement('a')
aPenultimoEnlace.setAttribute('href', hrefPenultimoEnlace)
aPenultimoEnlace.innerHTML = textPenultimoEnlace

// recojo el div'info'
var info = document.getElementById('info')
// añado el contenido en una lista que será añadida
info.insertAdjacentHTML('beforebegin',
    `<h2>Info del documento.</h2>
    <ul>
        <li>El número de párrafos de Ejercicio1.html es:  ${parrafos.length}</li>
        <li>El contenido de 2º párrafo:   ${parrafo2}</li>
        <li>El número de enlaces de Ejercicio1.html es: ${enlaces.length}</li>
        <li>Dirección del primer enlace: &quot;${hrefPrimerEnlace}&quot;  y este es el enlace:  </li>    
        <li>Dirección del penúltimo enlace: &quot;${hrefPenultimoEnlace}&quot;  y este es el enlace:  </li>
        <li>Prueba a enlaces <a href="${hrefPrimerEnlace}">Esto también funcionaría</a></li>
     </ul>`)

// extraigo los elementos li para añadri los 'a' con appenChild, accedo a cada uno directamente a su posición.
var li = document.querySelectorAll('li')

var liPrimerEnlace = li[3]
liPrimerEnlace.appendChild(aPrimerEnlace)

var liPenultimoEnlace = li[4]
liPenultimoEnlace.appendChild(aPenultimoEnlace)
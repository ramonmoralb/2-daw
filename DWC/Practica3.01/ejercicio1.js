'use strict'

var parrafos = document.getElementsByTagName('p')
var parrafo2 = parrafos[1].innerText
var enlaces = document.getElementsByTagName('a')
var primerEnlace = enlaces[0].href
var penultimoEnlace = (enlaces[enlaces.length - 2]).href
var info = document.getElementById('info')

info.innerHTML =
    `<h2>Info del documento.</h2>
    <ul>
        <li>El número de párrafos de Ejercicio1.html es: ${parrafos.length}</li>
        <li>El contenido de 2º liárrafo: ', ${parrafo2}</li>
        <li>El número de enlaces de Ejercicio1.html es: ' ${enlaces.length}</li>
        <li>Dirección del primer enlace: ${primerEnlace}</li>   
        <li>Dirección del penúltimo enlace: ${penultimoEnlace}</li>
     </ul>
     `
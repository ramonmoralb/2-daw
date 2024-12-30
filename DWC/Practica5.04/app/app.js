"use strict"
import { mostraPeliculas } from "../funciones/funciones.js"
import { getFilms } from "../api/api.js"
document.addEventListener("DOMContentLoaded", async () => {
    const contenedorPrincipal = document.getElementById("contenido-principal");
    const movies = await getFilms();
    const divPeliculas = mostraPeliculas(movies);
    contenedorPrincipal.appendChild(divPeliculas);
})
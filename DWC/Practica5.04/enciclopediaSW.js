import { getAllMovies } from "./api.js"
import { mostrarPeliculas } from "./funciones.js";
document.addEventListener("DOMContentLoaded", async () => {
    const contenedorPeliculas = document.getElementById("div-contenedor")
    const movies = await getAllMovies();

    mostrarPeliculas(movies, contenedorPeliculas);


})
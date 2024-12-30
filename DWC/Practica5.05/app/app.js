"use strict";
import { getAllEpisodes, getAllCharacters } from "../api/api.js";
import { listaEpisodios, listaPersonajes } from "../funciones/funciones.js";
document.addEventListener("DOMContentLoaded", async () => {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const [episodiosObj, personajesObj] = await Promise.all([getAllEpisodes(), getAllCharacters()]);
    const divEpisodios = listaEpisodios(episodiosObj);
    const divPersonajes = listaPersonajes(personajesObj);
    contenedorPrincipal.appendChild(divEpisodios);
    contenedorPrincipal.appendChild(divPersonajes);
});
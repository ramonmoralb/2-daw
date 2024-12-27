import { getMovie, getCharactersUrl } from "./api.js";
const mostrarPeliculas = (movies, contenedor) => {
    if (Array.isArray(movies) && movies.length > 0) {
        const listaPeliculas = document.createElement("ul");
        listaPeliculas.classList.add("lista-peliculas")
        movies.forEach((pelicula, indice) => {
            const li = document.createElement("li");
            const { parrafoCapitulo, parrafoTitulo } = mostarPelicula(pelicula);
            li.appendChild(parrafoTitulo);
            li.appendChild(parrafoCapitulo);
            li.classList.add("pelicula-item-lista");
            listaPeliculas.appendChild(li);
        });
        contenedor.appendChild(listaPeliculas);
    }
    else {
        const parrafoError = document.createElement("p")
        parrafoError.innerHTML = "No se ha podido cargar la lista de peliculas"
        contenedor.appendChild(parrafoError)
    }
}

const mostarPelicula = (pelicula) => {
    const { title, episode_id, url } = pelicula;
    const parrafoTitulo = document.createElement("p");
    parrafoTitulo.innerHTML = "Título: ";
    const spanTitulo = document.createElement("span")
    spanTitulo.innerHTML = title
    parrafoTitulo.appendChild(spanTitulo)
    const parrafoCapitulo = document.createElement("p");
    parrafoCapitulo.innerHTML = "Capítulo: ";
    const spanCapitulo = document.createElement("span")
    spanTitulo.addEventListener("click", () => motrarInfo(url));
    spanCapitulo.innerHTML = episode_id
    parrafoCapitulo.appendChild(spanCapitulo)

    return { parrafoTitulo, parrafoCapitulo }
}
const motrarInfo = async (url) => {
    const divInfo = document.getElementById("div-info");
    var html = "Cargando datos..."
    divInfo.innerHTML = html
    try {
        const pelicula = await getMovie(url);

        if (pelicula) {
            const { title, opening_crawl, producer, characters } = pelicula
            const p = await getCharactersUrl(characters);
            console.log(p)
            html =
                `<div class="info-pelicula">
            <p>Datos de: ${title} </p>
            <p>Sipnopsis:${opening_crawl} </p>
            <p>Productor: ${producer}</p>
        </div>`;
            divInfo.innerHTML = html
        } else {
            divInfo.innerHTML = "Vaya algo salió mal.";
        }
    } catch (error) {
        divInfo.innerHTML = "Fallo al recuperar la película ";
    }

}

export { mostrarPeliculas }
import { getMovie, getCharactersUrl, getCharacter } from "./api.js";

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
            const personajes = await getCharactersUrl(characters)
            const divPersonajes = await mostrarPersonajes(personajes)

            html =
                `<div class="info-pelicula">
                    <p>Datos de: ${title} </p>
                    <p>Sipnopsis:${opening_crawl} </p>
                    <p>Productor: ${producer}</p>
                </div>`;
            divInfo.innerHTML = html
            divInfo.appendChild(divPersonajes)
        } else {
            divInfo.innerHTML = "Vaya algo salió mal.";
        }

    } catch (error) {
        divInfo.innerHTML = "Fallo al recuperar la película ";
    }

}

const mostrarPersonajes = async (personajesUrl) => {
    const div = document.createElement("div");
    div.classList.add("div-personajes");
    div.innerHTML = "Cargando personajes...";

    if (personajesUrl) {
        const ul = document.createElement("ul");
        ul.classList.add("lista-personajes");
        personajesUrl.forEach(async (personajeUrl) => {
            const li = document.createElement("li");
            li.classList.add("li-personaje");
            const { name, vehiculosResueltos } = await getCharacter(personajeUrl);
            console.log(vehiculosResueltos)
            li.innerText = name;
            if (vehiculosResueltos.length > 0) {
                console.log("vehiculos de : ", name, "  ", vehiculosResueltos)
            }
            ul.appendChild(li)
        })
        div.innerHTML = "";
        div.appendChild(ul);
    } else {
        div.innerHTML = "No hay personajes";
    }
    return div;
}

export { mostrarPeliculas }
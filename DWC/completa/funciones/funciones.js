//mostrar películas recibe las peliculas 
//retorna un div con un div con un lista desordenada

const mostraPeliculas = (movies) => {
    const { peliculas, error } = movies;
    const div = document.createElement("div");
    div.classList.add("contenedor-peliculas")

    if (error === null, peliculas !== null) {
        const ul = document.createElement("ul");
        ul.classList.add("lista-peliculas")
        peliculas.forEach(pelicula => {
            const li = peliculaToLi(pelicula)
            ul.appendChild(li);
            div.appendChild(ul)
        });
        console.log(peliculas)
        return div;

    } else {
        const p = document.createElement("p");
        p.innerHTML = "No se pueden mostrar las películas."
        div.appendChild(p)
        return div;
    }
}

// recibe objeto película y retorna el html li 
const peliculaToLi = (pelicula) => {
    const li = document.createElement("li");
    li.classList.add("li-pelicula-item");
    const pTitulo = document.createElement("p");
    pTitulo.classList.add("li-titulo");
    pTitulo.innerHTML = "Título: ";
    const spanTitulo = document.createElement("span");
    spanTitulo.innerHTML = pelicula.title;
    spanTitulo.classList.add("span-titulo")
    spanTitulo.addEventListener("click", () => infoPelicula(pelicula))
    const pEpisodio = document.createElement("p");
    const spanEpisodio = document.createElement("span");
    spanEpisodio.innerHTML = pelicula.episode_id;
    pEpisodio.innerHTML = "Epsiodio: ";
    pEpisodio.classList.add("li-episodio");
    pTitulo.appendChild(spanTitulo);
    pEpisodio.appendChild(spanEpisodio);
    li.appendChild(pTitulo);
    li.appendChild(pEpisodio);
    return li;
}

const infoPelicula = (pelicula) => {
    const contenedorPrincipal = document.getElementById("contenido-principal");
    const divExistente = document.getElementById("info-pelicula");
    if (divExistente) {
        divExistente.remove();
    }


    const div = document.createElement("div");
    div.id = "info-pelicula";
    const tituloH2 = document.createElement("h2");
    tituloH2.classList.add("titulo-info");
    tituloH2.innerHTML = `Sipnopsis de: ${pelicula.title} `
    const pSipnopsis = document.createElement("p");
    pSipnopsis.innerHTML = pelicula.opening_crawl;
    pSipnopsis.classList.add("parrafo-sipnopsis")
    const pDirector = document.createElement("p");
    pDirector.classList.add("p-director")
    const pProductor = document.createElement("p");
    pProductor.classList.add("p-productor")
    pDirector.innerHTML = `Director: <strong>${pelicula.director}</strong>`
    pProductor.innerHTML = `Productor: <strong>${pelicula.producer}</strong>`



    div.appendChild(tituloH2);
    div.appendChild(pDirector);
    div.appendChild(pProductor);
    div.appendChild(pSipnopsis);

    contenedorPrincipal.appendChild(div);
};
export { mostraPeliculas };
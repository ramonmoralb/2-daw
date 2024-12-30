"use strict";

const listaEpisodios = (episodiosObj) => {
    const div = document.createElement("div");
    div.classList.add("contendor-lista-episodios");

    const h2 = document.createElement("h2");
    h2.innerHTML = "Lista de capítulos:";

    const ul = document.createElement("ul");
    ul.classList.add("lista-episodios")

    const { episodios, error } = episodiosObj;
    if (error === null) {
        episodios.forEach((episodio) => {
            const { name } = episodio;

            const li = document.createElement("li");
            li.classList.add("li-episodio-item")
            const divEpisodio = document.createElement("div");
            divEpisodio.classList.add("episodio-detalle");

            divEpisodio.addEventListener("click", (e) => {
                mostraInfoEpisodio(e, episodio)
            });

            const pNombre = document.createElement("p");
            pNombre.innerHTML = `Título: ${name}`;

            divEpisodio.appendChild(pNombre);
            li.appendChild(divEpisodio);
            ul.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.innerHTML = "No se han podido recuperar los capítulos.";
        ul.appendChild(li);
    }

    div.appendChild(h2);
    div.appendChild(ul);
    return div;
};

const mostraInfoEpisodio = (e, episodioObj) => {
    const { air_date, episode } = episodioObj;
    const temporada = episode.slice(1, 3);
    const capitulo = episode.slice(4, 6);
    const contenedor = e.target.parentNode;
    const infoDivExistente = contenedor.querySelector(".info-episodio");
    // si está mostrando la info la oculta
    if (infoDivExistente) {
        infoDivExistente.remove();
        return;
    }
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-episodio");

    const pTemporada = document.createElement("p");
    const pCapitulo = document.createElement("p");
    const pEmision = document.createElement("p");

    pTemporada.innerHTML = `Temporada: ${temporada}`;
    pCapitulo.innerHTML = `Capítulo: ${capitulo}`;
    pEmision.innerHTML = `Emisión: ${air_date}`;

    infoDiv.appendChild(pTemporada);
    infoDiv.appendChild(pCapitulo);
    infoDiv.appendChild(pEmision);
    contenedor.appendChild(infoDiv);
};
const listaPersonajes = (personajesObj) => {
    const divPersonajes = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.classList.add("titulo-lista-personajes")
    h2.innerHTML = "Lista de personajes:"
    divPersonajes.classList.add("contenedor-pesonajes");
    divPersonajes.appendChild(h2);
    const ul = document.createElement("ul");
    ul.classList.add("lista-pesonajes");
    const { personajes, error } = personajesObj;
    if (error === null) {
        personajes.forEach(personaje => {
            const li = document.createElement("li");
            li.addEventListener("click", (e) => { mostraInfoPersonaje(e, personaje) })
            li.classList.add("li-perosonaje-item");
            li.innerHTML = `Nombre: ${personaje.name}`;
            ul.appendChild(li);
        })
    } else {
        const li = document.createElement("li");
        li.innerHTML = "No se ha podido cargar la lista de personajes.";
        ul.appendChild(li);
    }
    console.log(personajes);
    divPersonajes.appendChild(ul);
    return divPersonajes;
}
const mostraInfoPersonaje = (e, personajeObj) => {
    const { name, gender, image, status, origin } = personajeObj;
    const contenedor = e.target.closest("li");
    const infoDivExistente = contenedor.querySelector(".info-personaje");


    if (infoDivExistente) {
        infoDivExistente.remove();
        return;
    }


    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-personaje");

    const pGenero = document.createElement("p");
    pGenero.textContent = `Género: ${gender}`;

    const pOrigen = document.createElement("p");
    pOrigen.textContent = `Origen: ${origin.name}`;
    const pEstado = document.createElement("p");
    pEstado.textContent = `Estado: ${status}`;

    const imagen = document.createElement("img");
    imagen.src = image;
    imagen.alt = `Imagen de ${name}`;
    infoDiv.appendChild(pGenero);
    infoDiv.appendChild(pOrigen);
    infoDiv.appendChild(pEstado);
    infoDiv.appendChild(imagen);
    contenedor.appendChild(infoDiv);
};





export { listaEpisodios, listaPersonajes };
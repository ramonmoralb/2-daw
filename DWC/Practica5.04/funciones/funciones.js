"use strict"
//mostrar películas recibe las peliculas 
//retorna un div con un div con un lista desordenada
import { getCharacter, getFlota } from "../api/api.js";
const mostraPeliculas = (movies) => {
    const { peliculas, error } = movies;
    const div = document.createElement("div");
    div.classList.add("contenedor-peliculas")

    if (error === null && peliculas !== null) {
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

const personajeToLi = (personaje) => {
    const li = document.createElement("li");
    li.classList.add("li-personaje")
    const pNombre = document.createElement("p");
    pNombre.classList.add("nombre-personaje-parrafo")
    pNombre.addEventListener("click", (e) => { infoPersonaje(e, personaje) })
    pNombre.innerHTML = personaje.name;
    li.appendChild(pNombre)
    return li;
}
const infoPersonaje = (evento, personaje) => {
    const contenedorActual = evento.target.parentNode;
    const divExistente = document.querySelector(".descripcion-personaje");

    if (divExistente && divExistente.dataset.personajename === personaje.name) {
        divExistente.remove();
        return;
    }

    // Si existe otra descripción, la eliminamos
    if (divExistente) {
        divExistente.remove();
    }

    const botonPilota = document.createElement("button");
    botonPilota.innerHTML = "Pilota";
    botonPilota.onclick = (e) => {
        mostrarNaves(e, personaje.vehicles, personaje.starships);
    };

    const pGenero = document.createElement("p");
    pGenero.innerHTML = `Género: ${personaje.gender}`;
    const pPeso = document.createElement("p");
    pPeso.innerHTML = `Peso: ${personaje.mass}`;
    const pAltura = document.createElement("p");
    pAltura.innerHTML = `Altura: ${personaje.height}`;
    const pColorOjos = document.createElement("p");
    pColorOjos.innerHTML = `Color ojos: ${personaje.eye_color}`;
    const pColorPelo = document.createElement("p");
    pColorPelo.innerHTML = `Color pelo: ${personaje.hair_color}`;

    const divDescripcionPersonaje = document.createElement("div");
    divDescripcionPersonaje.classList.add("descripcion-personaje");

    // para quitar del dom el elemento actual
    //  dataset asocia al contenedor investigar sobre su uso
    divDescripcionPersonaje.dataset.personajename = personaje.name;
    //  console.log("name con dataset: ", divDescripcionPersonaje.dataset.personajename);

    divDescripcionPersonaje.appendChild(pGenero);
    divDescripcionPersonaje.appendChild(pPeso);
    divDescripcionPersonaje.appendChild(pAltura);
    divDescripcionPersonaje.appendChild(pColorOjos);
    divDescripcionPersonaje.appendChild(pColorPelo);
    divDescripcionPersonaje.appendChild(botonPilota);

    contenedorActual.appendChild(divDescripcionPersonaje);
};

const mostrarNaves = async (e, vehiclesUrls, starshipsUrls) => {
    const divFlota = document.createElement("div");
    const divExistente = document.querySelector(".contenedor-flota");
    if (divExistente) {
        divExistente.remove();
    }
    divFlota.classList.add("contenedor-flota");

    const { vehicles, starships, error } = await getFlota(vehiclesUrls, starshipsUrls);

    if (error === null) {
        const navesDiv = document.createElement("div");
        navesDiv.classList.add("flota-naves");

        const vehiculosDiv = document.createElement("div");
        vehiculosDiv.classList.add("flota-vehiculos");
        const navesTitulo = document.createElement("h3");
        navesTitulo.innerText = "Naves pilotadas";
        navesDiv.appendChild(navesTitulo);

        const vehiculosTitulo = document.createElement("h3");
        vehiculosTitulo.innerText = "Vehículos pilotados";
        vehiculosDiv.appendChild(vehiculosTitulo);


        if (starships.length > 0) {
            const ulNaves = document.createElement("ul");
            ulNaves.classList.add("lista-naves");

            starships.forEach(starship => {
                const li = document.createElement("li");
                li.classList.add("item-nave");
                li.innerHTML = `
                    <strong>${starship.starship.name}</strong>
                    <p>Fabricante: ${starship.starship.manufacturer}</p>
                    <p>Modelo: ${starship.starship.model}</p>
                `;
                ulNaves.appendChild(li);
            });

            navesDiv.appendChild(ulNaves);
        } else {
            navesDiv.innerHTML += "<p>No pilota ninguna nave.</p>";
        }

        if (vehicles.length > 0) {
            const ulVehiculos = document.createElement("ul");
            ulVehiculos.classList.add("lista-vehiculos");

            vehicles.forEach(vehicle => {
                const li = document.createElement("li");
                li.classList.add("item-vehiculo");
                li.innerHTML = `
                    <strong>${vehicle.vehicle.name}</strong>
                    <p>Fabricante: ${vehicle.vehicle.manufacturer}</p>
                    <p>Modelo: ${vehicle.vehicle.model}</p>
                `;
                ulVehiculos.appendChild(li);
            });

            vehiculosDiv.appendChild(ulVehiculos);
        } else {
            vehiculosDiv.innerHTML += "<p>No pilota ningún vehículo.</p>";
        }

        divFlota.appendChild(navesDiv);
        divFlota.appendChild(vehiculosDiv);
        e.target.parentNode.appendChild(divFlota);

    } else {
        divFlota.innerHTML = "<p>Algo ha fallado al cargar los vehículos y las naves.</p>";
        e.target.parentNode.appendChild(divFlota);
    }
};



const MorstarListaPersonajes = async (personajesUrls) => {
    let personajesUrls10 = []
    const ul = document.createElement("ul");
    ul.classList.add("lista-personajes")
    personajesUrls10 = personajesUrls.slice(0, 10);
    for (const personajeUrl of personajesUrls10) {
        const { personaje, error } = await getCharacter(personajeUrl);

        if (error === null) {
            const li = personajeToLi(personaje);
            ul.appendChild(li);
        } else {
            const li = document.createElement("li");
            li.innerHTML = `No se ha podido recuperar este personaje.`;
            ul.appendChild(li);
            console.log("Error al recuperar el personaje");
        }
    }
    return ul;
};



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

const infoPelicula = async (pelicula) => {
    const contenedorPrincipal = document.getElementById("contenido-principal");
    const divExistente = document.getElementById("info-pelicula");
    if (divExistente) {
        divExistente.remove();
    }

    const div = document.createElement("div");
    div.id = "info-pelicula";
    const tituloH2 = document.createElement("h2");
    tituloH2.classList.add("titulo-info");
    tituloH2.innerHTML = `Sinopsis de: ${pelicula.title} `;
    const pSipnopsis = document.createElement("p");
    pSipnopsis.innerHTML = pelicula.opening_crawl;
    pSipnopsis.classList.add("parrafo-sipnopsis");
    const pDirector = document.createElement("p");
    pDirector.classList.add("p-director");
    const pProductor = document.createElement("p");
    pProductor.classList.add("p-productor");
    pDirector.innerHTML = `Director: <strong>${pelicula.director}</strong>`;
    pProductor.innerHTML = `Productor: <strong>${pelicula.producer}</strong>`;

    const listaPersonajes = await MorstarListaPersonajes(pelicula.characters);
    const divSinopsis = document.createElement("div");
    const divListaPersonajes = document.createElement("div");
    divSinopsis.classList.add("contenedor-sinoposis");
    divListaPersonajes.classList.add("contenedor-lista-personajes");
    divSinopsis.appendChild(tituloH2);
    divSinopsis.appendChild(pDirector);
    divSinopsis.appendChild(pProductor);
    divSinopsis.appendChild(pSipnopsis);
    divListaPersonajes.appendChild(listaPersonajes);
    div.appendChild(divSinopsis);
    div.appendChild(divListaPersonajes);
    contenedorPrincipal.appendChild(div);

};
export { mostraPeliculas };
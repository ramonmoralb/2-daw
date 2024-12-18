async function getAllMovies() {
    try {
        const respuesta = await fetch("https://swapi.py4e.com/api/films/")
        if (!respuesta.ok) {
            throw new Error(`Fallo al recuoperar datos`);
        }
        const datos = await respuesta.json()
        return datos.results
    } catch (error) {
        return error.message;
    }
}
async function getMovie(url) {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error("Error al recuperar pélicula.");
        }
        const pelicula = await respuesta.json();
        return pelicula;
    } catch (error) {
        throw new Error(error.message);
    }
}
async function getCharacter(url) {
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error("Fallo al recuperar personaje.");
        }
        const personaje = await respuesta.json();
        return personaje

    } catch (error) {
        throw new Error(error.message);
    }
}


async function getCharactersUrl(characters) {
    const arrPersonajes = [];
    const personajesUrl10 = characters.splice(0, 10);
    personajesUrl10.forEach(async (personajeUrl) => {
        const personaje = await getCharacter(personajeUrl);
        arrPersonajes.push(personaje)
    });
    return arrPersonajes;
}

export { getAllMovies, getMovie, getCharactersUrl }
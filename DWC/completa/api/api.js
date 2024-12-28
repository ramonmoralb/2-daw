"use strict"

const getFilms = async () => {
    try {
        const res = await fetch("https://swapi.py4e.com/api/films")
        if (!res.ok) {
            throw new Error("Error al recuperar peliculas");
        }

        const datos = await res.json();
        // el retorno es un objeto con el atributo error, el cual voy a usar para controlar la reenderización
        return { peliculas: datos.results, error: null };
    } catch (error) {
        console.log(error.message);
        return { peliculas: null, error: error.message };
    }
}
const getCharacter = async (characterUrl) => {
    try {
        const res = await fetch(characterUrl);
        if (!res.ok) {
            throw new Error("Error al recuperar personaje.")
        }
        const personaje = await res.json();
        return { personaje: personaje, error: null };

    } catch (error) {
        return { personaje: null, error: error.message }
    }
}
export { getFilms, getCharacter };
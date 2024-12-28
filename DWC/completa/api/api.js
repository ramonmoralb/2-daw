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
const getCharacter = (characterUrl) => {
    try {
        //todo
    } catch (error) {

    }
}
export { getFilms };
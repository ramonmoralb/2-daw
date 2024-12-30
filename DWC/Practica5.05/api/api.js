"use strict"

const getAllEpisodes = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/episode")
        if (!res.ok) {
            throw new Error("Error al recuperar los episodios");
        }
        const data = await res.json();
        const episodios = data.results;
        return { episodios: episodios, error: null }

    } catch (error) {
        console.log(error.message);
        return { episodios: null, error: error }
    }
}
const getAllCharacters = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        if (!res.ok) {
            throw new Error("Error al recuperar los personajes");
        }
        const data = await res.json();
        const personajes = data.results;
        return { personajes: personajes, error: null }

    } catch (error) {
        console.log(error.message);
        return { personajes: null, error: error }
    }
}

export { getAllEpisodes, getAllCharacters }
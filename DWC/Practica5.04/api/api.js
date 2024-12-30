"use strict"

const getFilms = async () => {
    try {
        const res = await fetch("https://swapi.py4e.com/api/films")
        if (!res.ok) {
            throw new Error("Error al recuperar peliculas");
        }
        const datos = await res.json();
        // el retorno es un objeto con el atributo error, el cual voy a usar para controlar la reenderización
        // de este modo puedo devolver el status de la respuesta o lo que quiera o necesite dentro del objeto...            
        return { peliculas: datos.results, error: null };
    } catch (error) {
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

const getVehicle = async (vehicleUrl) => {
    try {
        const res = await fetch(vehicleUrl);
        if (!res.ok) {
            throw new Error("Error al recuperar vehículo.");
        }
        const vehicle = await res.json();
        return { vehicle: vehicle, error: null };
    } catch (error) {
        return { vehicle: null, error: error.message };
    }
}

const getStarship = async (starshipUrl) => {
    try {
        const res = await fetch(starshipUrl);
        if (!res.ok) {
            throw new Error("Error al recuperar vehículo.");
        }
        const starship = await res.json();
        return { starship: starship, error: null };
    } catch (error) {
        return { starship: null, error: error.message };
    }
}

const getFlota = async (vehiclesUrls, starshipsUrls) => {
    try {
        const vehicles = await Promise.all(vehiclesUrls.map(vehicleUrl => getVehicle(vehicleUrl)));
        const starships = await Promise.all(starshipsUrls.map(starshipUrl => getStarship(starshipUrl)));
        return { vehicles: vehicles, starships: starships, error: null }
    } catch (error) {
        return { vehicles: null, starships: null, error: error }
    }
}

export { getFilms, getCharacter, getFlota };
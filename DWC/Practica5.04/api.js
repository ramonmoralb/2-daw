async function getAllMovies() {
    try {
        const respuesta = await fetch("https://swapi.py4e.com/api/films/")
        if (!respuesta.ok) {
            throw new Error("Fallo al recuoperar datos");
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
        const vehiculosPromesas = await getVehicles(personaje.vehicles);
        const vehiculosResueltos = await Promise.all(vehiculosPromesas)

        return {
            ...personaje,
            vehiculosResueltos
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


async function getCharactersUrl(characters) {
    const personajesUrl10 = characters.splice(0, 10);
    return personajesUrl10;
}
async function getVehicles(vehiclesUrls) {
    try {
        const vehiculosPromesas = vehiclesUrls.map(vehiclesUrl => fetch(vehiclesUrl).then(res => {
            if (!res.ok) {
                throw new Error(`Error al obtener vehículo: ${res.statusText}`);
            }
            return res.json();
        }));
        return await vehiculosPromesas;
    } catch (error) {
        console.error(`Error en getVehicles: ${error.message}`);
        throw new Error(error.message);
    }
}



export { getAllMovies, getMovie, getCharactersUrl, getCharacter }
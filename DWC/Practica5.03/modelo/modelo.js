"use strict";

const cargarLista = async () => {
    return fetch("https://swapi.dev/api/films/")
        .then((respuesta) => {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                throw new Error("Error al recuperar todas las películas");
            }
        })
        .then((data) =>

            data.results
        )
        .catch((error) => {
            console.log("Error al cargar lista:", error.message);
        });
};

const peliculaPorId = async (url) => {
    return fetch(url)
        .then((respuesta) => {
            if (respuesta.ok) {

                return respuesta.json();
            } else {
                throw new Error(`Fallo al recuperar la pelicula`);
            }
        })
        .then((data) => data)
        .catch((error) => {
            console.log("Error al recuperar pelicula por id:", error.message);
        });
};

const interpretePorId = async (url) => {
    return fetch(url)
        .then((respuesta) => {
            if (respuesta.ok) {
                return respuesta.json()
            }
            else {
                throw new Error("Fallo al recuperar interpretes")
            }
        })
        .then((data) => data)
        .catch((error) => {
            console.log("Error al recuperar interprete por id:", error.message);
        });

};




export { cargarLista, peliculaPorId, interpretePorId };

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
        .then((data) => data.results)
        .catch((error) => {
            console.log("Error:", error.message);

        });
};

const peliculaPorId = async (url) => {
    return fetch(url)
        .then((respuesta) => {
            if (respuesta.ok) {

                return respuesta.json();
            } else {
                throw new Error(`Error al recuperar la película `);
            }
        })
        .catch((error) => {
            console.log("Error:", error.message);
        });
};

export { cargarLista, peliculaPorId };

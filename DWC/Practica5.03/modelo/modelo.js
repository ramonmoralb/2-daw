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
        .then((data) =>
            data)
        .catch((error) => {
            console.log("Error:", error.message);
        });
};
const interpretePorId = async (url) => {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();
        //  console.log(datos); // Opcional: para depuración
        return datos;
    } catch (error) {
        console.error(`Error al realizar la solicitud: ${error.message}`);
    }
};




export { cargarLista, peliculaPorId, interpretePorId };

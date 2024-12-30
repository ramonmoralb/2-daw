import { useContext, useState } from "react";
import { contexto } from "../contexto/ProveedorPeliculas";
import { InfoPelicula } from "./InfoPelicula";

const ListaPeliculas = () => {
    const peliculas = useContext(contexto);
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);


    const seleccionarPelicula = (id) => {
        setPeliculaSeleccionada((prevId) => (prevId === id ? null : id));
    };


    return (
        <div>
            <h1>Lista de Películas:</h1>
            <ul>
                {peliculas !== null ? (
                    peliculas.map((pelicula) => (
                        <li key={pelicula.episode_id}>
                            <h2>
                                Título: <span onClick={() => seleccionarPelicula(pelicula.episode_id)}>
                                    {pelicula.title}
                                </span>
                            </h2>
                            <p>Episodio: {pelicula.episode_id}</p>
                            {peliculaSeleccionada === pelicula.episode_id && (
                                <InfoPelicula pelicula={pelicula} />
                            )}
                        </li>
                    ))
                ) : (
                    <p>No hay películas disponibles o ocurrió un error.</p>
                )}
            </ul>
        </div>
    );
};

export { ListaPeliculas };

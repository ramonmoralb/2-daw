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
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Películas:</h1>
            <ul className="space-y-4">
                {peliculas !== null ? (
                    peliculas.map((pelicula) => (
                        <li key={pelicula.episode_id} className="border p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">
                                Título:
                                <span
                                    onClick={() => seleccionarPelicula(pelicula.episode_id)}
                                    className="text-orange-500 cursor-pointer hover:underline"
                                >
                                    {pelicula.title}
                                </span>
                            </h2>
                            <p className="text-gray-700">Episodio: {pelicula.episode_id}</p>
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

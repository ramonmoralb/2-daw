import { useState, useEffect } from "react";
import { getCharacter } from "../api/api";
import { InfoFlota } from "./InfoFlota";

const InfoPersonajes = ({ personajes }) => {
    const [datosPersonajes, setDatosPersonajes] = useState([]);
    const [personajeSelecionado, setPersonajeSelecionado] = useState(null);
    const [verFlota, setMostarFlota] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                const resultados = await Promise.all(
                    personajes.map(async (url) => {
                        const { personaje, error } = await getCharacter(url);
                        if (error) throw new Error(error);
                        return personaje;
                    })
                );
                setDatosPersonajes(resultados);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchPersonajes();
    }, [personajes]);

    const mostarFlota = () => {
        setMostarFlota(!verFlota);
    }

    const seleccionarPersonaje = (personajeName) => {
        setPersonajeSelecionado((prevName) => (prevName === personajeName ? null : personajeName));
        setMostarFlota(false);
    }

    if (error) return <p>Error al cargar personajes: {error}</p>;
    if (datosPersonajes.length === 0) return <p>Cargando personajes...</p>;

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Personajes:</h3>
            <ul className="space-y-4">
                {datosPersonajes.map((personaje, index) => (
                    <li key={index} className="border p-4 rounded-lg shadow-md">
                        <p className="font-semibold text-lg">
                            Nombre:{" "}
                            <span
                                onClick={() => seleccionarPersonaje(personaje.name)}
                                className="text-orange-500 cursor-pointer hover:underline"
                            >
                                {personaje.name}
                            </span>
                        </p>
                        {personajeSelecionado === personaje.name && (
                            <>
                                <p>Altura: {personaje.height}</p>
                                <p>Peso: {personaje.mass}</p>
                                <p>Género: {personaje.gender}</p>
                                <p>Color pelo: {personaje.hair_color}</p>
                                <p>Color ojos: {personaje.eye_color}</p>
                                <button
                                    onClick={mostarFlota}
                                    className="mt-2 p-2 bg-orange-400 text-white rounded-md"
                                >
                                    Pilota
                                </button>
                                {verFlota && <InfoFlota vehiclesUrls={personaje.vehicles} starshipsUrls={personaje.starships} />}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { InfoPersonajes };

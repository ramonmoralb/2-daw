import { useState, useEffect } from "react";
import { getFlota } from "../api/api";

const InfoFlota = ({ vehiclesUrls, starshipsUrls }) => {
    const [flota, setFlota] = useState({ vehicles: [], starships: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarFlota = async () => {
            const { vehicles, starships, error } = await getFlota(vehiclesUrls, starshipsUrls);
            if (error) {
                setError(error);
            } else {
                setFlota({ vehicles, starships });
            }
        };

        cargarFlota();
    }, [vehiclesUrls, starshipsUrls]);

    if (error) return <p>Error al cargar la flota: {error}</p>;

    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold">Flota:</h3>
            <h4 className="font-semibold">Vehículos:</h4>
            {flota.vehicles.length === 0 ? (
                <p>No hay vehículos disponibles.</p>
            ) : (
                <ul className="space-y-2">
                    {flota.vehicles.map((vehicle, index) => (
                        <li key={index} className="border p-2 rounded-md">
                            {vehicle.error ? (
                                <p>Error al cargar vehículo: {vehicle.error}</p>
                            ) : (
                                <>
                                    <p>Nombre: {vehicle.vehicle.name}</p>
                                    <p>Modelo: {vehicle.vehicle.model}</p>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            <h4 className="font-semibold mt-4">Naves espaciales:</h4>
            {flota.starships.length === 0 ? (
                <p>No hay naves espaciales disponibles.</p>
            ) : (
                <ul className="space-y-2">
                    {flota.starships.map((starship, index) => (
                        <li key={index} className="border p-2 rounded-md">
                            {starship.error ? (
                                <p>Error al cargar nave espacial: {starship.error}</p>
                            ) : (
                                <>
                                    <p>Nombre: {starship.starship.name}</p>
                                    <p>Modelo: {starship.starship.model}</p>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { InfoFlota };

import { InfoPersonajes } from "./InfoPersonajes";

const InfoPelicula = ({ pelicula }) => {
    const { release_date } = pelicula;
    var partesFecha = release_date.split("-")
    partesFecha = partesFecha.reverse()
    const fechaEuropea = partesFecha.join("-");

    return (
        <div className="mt-4 text-gray-800">
            <p className="mb-2">Sinopsis: {pelicula.opening_crawl}</p>
            <p className="mb-2">Director: {pelicula.director}</p>
            <p className="mb-2">Productor: {pelicula.opening_crawl}</p>
            <p className="mb-2">Fecha estreno: {fechaEuropea}</p>
            <InfoPersonajes personajes={pelicula.characters.slice(0, 10)} />
        </div>
    );
};

export { InfoPelicula };

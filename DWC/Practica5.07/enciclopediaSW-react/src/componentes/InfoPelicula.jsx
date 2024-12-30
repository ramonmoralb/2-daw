import { InfoPersonajes } from "./InfoPersonajes";
const InfoPelicula = ({ pelicula }) => {
    const { release_date } = pelicula;
    var partesFecha = release_date.split("-")
    partesFecha = partesFecha.reverse()
    const fechaEuropea = partesFecha.join("-")

    return (
        <div className="">
            <p>Sinopsis: {pelicula.opening_crawl}</p>
            <p>Director: {pelicula.director}</p>
            <p>Productor: {pelicula.opening_crawl}</p>
            <p>Fecha estreno: {fechaEuropea}</p>
            <InfoPersonajes personajes={pelicula.characters.slice(0, 10)} />
        </div>)
};

export { InfoPelicula };
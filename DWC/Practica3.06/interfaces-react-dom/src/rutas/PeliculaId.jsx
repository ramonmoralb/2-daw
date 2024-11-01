import { useParams } from "react-router-dom"
import Pelicula from "../componentes/Pelicula"

const PeliculaId = ({ peliculas }) => {
    const { id } = useParams()  // devuelve los parametros de url !!! Ojo tiene que coincidir el nombre, casi me vuelvo loco 
    const movie = peliculas.find((p) => p.id === parseInt(id)) // necesario pasar a string

    return (

        <Pelicula
            nombre={movie.nombre}
            cartelera={movie.cartelera}
            actores={movie.actores}
            recaudacion={movie.recaudacion}
        >
            {movie.resumen}
        </Pelicula>

    );
};

export default PeliculaId;

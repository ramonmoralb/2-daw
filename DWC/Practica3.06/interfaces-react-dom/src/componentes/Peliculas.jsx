
import { Link } from "react-router-dom"
// recibe por prop el JSON
const Peliculas = ({ peliculas }) => {
    return (
        <ul className="container__app">
            {peliculas.map((pelicula) => ( // es necesario para reenderizar map(iteraciones) KEY con un identificador que debe ser único
                <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}>{pelicula.nombre}</Link> //pasa el param por url se debe usar useParams para recuperarlo
            ))}
        </ul>
    )
}

export default Peliculas
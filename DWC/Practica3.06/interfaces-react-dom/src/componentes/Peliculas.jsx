import { Link } from "react-router-dom"
import Menu from "./Menu"
import { subMenus } from "../objetos/subMenus"
// recibe por prop el JSON
const Peliculas = ({ peliculas }) => {

    return (
        <div className="peliculas">
            <Menu barNavClass={'submenu-peliculas'} itemsMenu={subMenus.subMenuPeliculas} />
            <ul className="container__app">
                {peliculas.map((pelicula) => ( // es necesario para reenderizar map(iteraciones) KEY con un identificador que debe ser único
                    <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}>{pelicula.nombre}</Link> //pasa el param por url se debe usar useParams para recuperarlo
                ))}
            </ul>

        </div>


    )
}

export default Peliculas
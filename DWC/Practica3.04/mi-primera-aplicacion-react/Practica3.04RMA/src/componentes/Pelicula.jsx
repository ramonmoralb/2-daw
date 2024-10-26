import Interpretes from "./Interpretes"

const Pelicula = ({ nombre, cartelera, actores, children }) => {
    return (
        <li className="contenedor-pelicula">
            <h2>{nombre}</h2>
            <img className="contenedor-pelicula__poster" src={cartelera} alt={`Poster de película ${nombre}`} />
            <p>{children}</p>
            <Interpretes actores={actores} /> {/**reenderiza el componente, que recibe los actores*/}
        </li>
    )
}
export default Pelicula


import Interpretes from "./Interpretes"

const Pelicula = ({ nombre, cartelera, actores, children }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={cartelera} alt="" />
            <p>{children}</p>
            <Interpretes actores={actores} /> {/**reenderiza el componente, que recibe los actores*/}
        </div>


    )
}
export default Pelicula


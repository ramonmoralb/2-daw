const Interprete = ({ actor }) => {
    return (
        <div className="interprete">
            <img src={actor.imagen} alt={`Imagen de ${actor.nombre}`} />
            <p>Nombre: {actor.nombre}</p>
            <p>Biografía: {actor.biografia}</p>
        </div>
    )
}
export default Interprete

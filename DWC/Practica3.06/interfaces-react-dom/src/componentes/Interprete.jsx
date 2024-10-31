const Interprete = ({ actor }) => {
    return (
        <li className="interprete">
            <img className="interprete__img" src={actor.imagen} alt={`Imagen de ${actor.nombre}`} />
            <div className="interprete__info">
                <p>Nombre: {actor.nombre}</p>
                <p>Biografía: {actor.biografia}</p>
            </div>
        </li>
    )
}
export default Interprete

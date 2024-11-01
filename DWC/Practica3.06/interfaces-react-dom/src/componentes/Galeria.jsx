import Menu from "./Menu"
import { subMenus } from "../objetos/subMenus"

const Galeria = ({ peliculas }) => {

    return (
        <div className="galeria">
            <Menu barNavClass={'submenu-galeria'} itemsMenu={subMenus.subMenuGaleria} />

            {peliculas ?
                (
                    <ul className="lista-galeria">
                        {peliculas.map((p) => (
                            <li className="item-galeria" key={p.id}> {/* Agregar `key` aquí */}
                                <figure>
                                    <img src={p.cartelera} alt={`Poster de ${p.nombre}`} /> {/* Alt más descriptivo */}
                                    <figcaption><h2>{p.nombre}</h2></figcaption>
                                </figure>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay películas disponibles.</p>
                )}

        </div>
    );
}
export default Galeria;

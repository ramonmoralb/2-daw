import Menu from "./Menu"
import { subMenus } from "../objetos/subMenus"

const Galeria = ({ peliculas }) => {

    return (
        <main className="contenedor-principal">
            <Menu barNavClass={'submenu-galeria'} itemsMenu={subMenus.subMenuGaleria} />
            {peliculas.map((p) => (
                <div key={p.id}> {/* Agregar `key` aquí */}
                    <h2>{p.nombre}</h2> {/* Puedes cambiar el texto aquí */}
                    <img src={p.cartelera} alt={`Poster de ${p.nombre}`} /> {/* Alt más descriptivo */}
                </div>
            ))}
        </main>
    );
}
export default Galeria;

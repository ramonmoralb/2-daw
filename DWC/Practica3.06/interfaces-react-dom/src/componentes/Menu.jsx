import { Link } from "react-router-dom"
/**Creo un componente menu.
 * Puedo reendereizar el menu donde quiera
 * Recibe un array de objetos, sobre el que iterará para crear los barnav 
 * el array contendrá la ruta y el texto de del link, además el nav recibe el nombre de la clase deseado, y la lista desordenada tamb.
 * */

const Menu = ({ itemsMenu, barNavClass, ulClass }) => {
    return (
        <nav className={barNavClass}>
            <ul className={ulClass}>
                {itemsMenu.map((item, i) =>
                (<li key={i}>
                    <Link to={item.ruta}>{item.texto}</Link>
                </li>))
                }
            </ul>
        </nav>
    )
}
export default Menu
import { Link } from "react-router-dom"
/**en la barra de navegación uso link. Link a la ruta deseada */
const Menu = () => {
    return (
        <div className="menu">
            <nav className="bar-nav">
                <ul className="bar-nav-lista">
                    <li className="bar-nav-item"><Link to='/'>Inicio</Link></li>
                    <li className="bar-nav-item"><Link to='/peliculas'>Películas</Link></li>
                    <li className="bar-nav-item"><Link to='/interpretes'>Interpretes</Link></li>
                    <li className="bar-nav-item"><Link to='/galeria'>Galería</Link></li>
                    <li className="bar-nav-item"><Link to='/acercaDe'>Acerca de</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu
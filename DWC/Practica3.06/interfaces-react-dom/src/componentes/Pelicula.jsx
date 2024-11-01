import { useRef, useState } from "react"
import Interpretes from "../rutas/Interpretes"
import Recaudacion from "./Recaudacion"
import Boton from "./Boton"
import '../css/pelicula.css'


const Pelicula = ({ nombre, cartelera, actores, recaudacion, children }) => {
    // hook muy usado, array de dos posiciones, pos 0 variable, pos 1 función par acceder a la variable y darle el valor deseado
    const [estadoTaquilla, setEstadoTaquilla] = useState(false)
    const [estadoElenco, setEstadoElenco] = useState(false)

    const handleClickTaquilla = () => {
        if (!estadoTaquilla) {
            refRecaudacion.current.classList.add('mostrar-taquilla')
            setEstadoTaquilla(true)
        } else {
            refRecaudacion.current.classList.remove('mostrar-taquilla')
            setEstadoTaquilla(false)
        }
    }
    const handleClickElenco = () => {
        if (!estadoElenco) {
            refElenco.current.classList.add('mostrar-elenco')
            setEstadoElenco(true)
        } else {
            refElenco.current.classList.remove('mostrar-elenco')
            setEstadoElenco(false)
        }
    }
    var refRecaudacion = useRef(null)
    var refElenco = useRef(null)
    return (
        <li className="contenedor-pelicula">
            <h2>{nombre}</h2>

            <img className="contenedor-pelicula__poster" src={cartelera} alt={`Poster de película ${nombre}`} />
            <p>{children}</p>

            <div className="botones">
                <Boton onClick={handleClickElenco} text='Elenco' />
                <Boton onClick={handleClickTaquilla} text='Taquilla' />
            </div>
            <Recaudacion refRecaudacion={refRecaudacion} recaudacion={recaudacion} />
            <Interpretes referencia={refElenco} actores={actores} className={'interpretes'} /> {/**reenderiza el componente, que recibe los actores*/}
        </li>
    )
}
export default Pelicula


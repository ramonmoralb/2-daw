import Interprete from "../componentes/Interprete"
import { generarUuidAleatorio } from "../bibliotecas/funciones"
import '../css/interpretes.css'
const Interpretes = ({ referencia, actores, className, children }) => {
    return (

        <ul ref={referencia} className={className}> {/**Ojo arreglar vicivilidad cuando saco la lista estla oculton pero no debe estarlo entra el conflicto con el componente pelicula */}
            {children}
            {actores.map(actor => (
                <Interprete actor={actor} key={generarUuidAleatorio()} /> /**Por cada actor reenderiza el componente Interprete que muestra el contenido */
            ))}
        </ul>


    )
}
export default Interpretes

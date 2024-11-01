import Interprete from "./Interprete"
import { generarUuidAleatorio } from "../bibliotecas/funciones"
const Interpretes = ({ referencia, actores, className }) => {
    return (
        <ul ref={referencia} className={className}> {/**Ojo arreglar vicivilidad cuando saco la lista estla oculton pero no debe estarlo entra el conflicto con el componente pelicula */}
            {actores.map(actor => (
                <Interprete actor={actor} key={generarUuidAleatorio()} /> /**Por cada actor reenderiza el componente Interprete que muestra el contenido */
            ))}
        </ul>

    )
}
export default Interpretes;

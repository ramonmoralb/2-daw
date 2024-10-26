import Interprete from "./Interprete"
import { generarUuidAleatorio } from "../bibliotecas/funciones"
const Interpretes = ({ actores }) => {
    return (
        <ul className="interpretes">
            {actores.map(actor => (
                <Interprete actor={actor} key={generarUuidAleatorio()} /> /**Por cada actor reenderiza el componente Interprete que muestra el contenido */
            ))}
        </ul>
    )
}
export default Interpretes;

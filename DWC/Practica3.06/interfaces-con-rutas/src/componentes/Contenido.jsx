import { Routes, Route } from "react-router-dom"
import Peliculas from "./Peliculas"
import Inicio from "./Inicio"
import Interpretes from "./Interpretes"
import Galeria from "./Galeria"
import AcercaDe from "./AceracaDe"
import peliculas from '../objetos/peliculas.json'
const Contenido = () => {
    return (
        <main className="contenido">
            <Routes>
                {/**Hay que pasarle el elemento en element 
                 * reendeiza cada elento segun la ubicación
                */}
                <Route element={<Inicio />} path="/" />
                <Route element={<Peliculas peliculas={peliculas.peliculas} />} path="/peliculas" /> {/**Hay que pasarle el elemento en element */}
                <Route element={<Interpretes peliculas={peliculas.peliculas} />} path="interpretes" />
                <Route element={<Galeria peliculas={peliculas.peliculas} />} path="galeria" />
                <Route element={<AcercaDe />} path="acercaDe" />
            </Routes>
        </main>
    )
}
export default Contenido
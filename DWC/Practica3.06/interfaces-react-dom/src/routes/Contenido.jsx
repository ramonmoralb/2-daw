import { Routes, Route } from 'react-router-dom'
import Inicio from '../componentes/Inicio'
import Peliculas from '../componentes/Peliculas'
import peliculas from "../objetos/peliculas.json"
import PeliculaId from '../componentes/PeliculaId'
import Interpretes from '../componentes/Interpretes'
import Galeria from '../componentes/Galeria'
const Contenido = () => {
    const actores = peliculas.peliculas.flatMap((a) => a.actores) // necesito aplanar el array para actores
    return (
        <Routes>
            <Route element={<Inicio />} path='/' />
            <Route element={<Peliculas peliculas={peliculas.peliculas} />} path='/peliculas' />
            <Route element={<PeliculaId peliculas={peliculas.peliculas} />} path='/peliculas/:id' />
            <Route element={<Interpretes actores={actores} className={''} />} path='/interpretes' />
            <Route element={<Galeria peliculas={peliculas.peliculas} />} path='/galeria' />
        </Routes>
    )
}
export default Contenido
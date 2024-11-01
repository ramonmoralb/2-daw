import { Routes, Route } from 'react-router-dom'
import Inicio from '../rutas/Inicio'
import Peliculas from '../rutas/Peliculas'
import peliculas from "../objetos/peliculas.json"
import PeliculaId from '../rutas/PeliculaId'
import Interpretes from '../rutas/Interpretes'
import Galeria from '../rutas/Galeria'
import AcercaDe from '../rutas/AcercaDe'
import Error from '../rutas/Error'
const Contenido = () => {
    const actores = peliculas.peliculas.flatMap((a) => a.actores) // necesito aplanar el array para actores
    return (
        <main className='contenedor-main'>
            <Routes>
                <Route element={<Inicio />} path='/' />
                <Route element={<Peliculas peliculas={peliculas.peliculas} />} path='/peliculas' />
                <Route element={<PeliculaId peliculas={peliculas.peliculas} />} path='/peliculas/:id' />
                <Route element={<Interpretes actores={actores} className={'lista-interpretes'} />} path='/interpretes' />
                <Route element={<Galeria peliculas={peliculas.peliculas} />} path='/galeria' />
                <Route element={<AcercaDe />} path='/acercade' />
                <Route element={<Error />} path='*' />
            </Routes>
        </main>

    )
}
export default Contenido
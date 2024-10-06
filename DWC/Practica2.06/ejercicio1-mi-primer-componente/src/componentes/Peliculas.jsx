'use strict'
import '../css/pelicula.css'
import { Elenco } from './Elenco.jsx' // importo el componente elenco
import { pelicula } from '../constantes/pelicula.js' // importo las constantes desde esta carpeta

export function Pelicula({ titulo, director, cartela, children }) {
    return (
        <div className='contenedor'>
            <div className='titulo'>
                <h1>{titulo}</h1>
                <h2>Director: {director}</h2>
            </div>
            <div className='cartela'>
                <img src={cartela} alt={`Cartel de ${titulo}`} />
            </div>
            <div className='resumen'>
                {children}
            </div>
            <Elenco titulo={titulo} actores={pelicula.actores}>
                <p>Este es parte del elenco para ver más pulse <a href="https://es.wikipedia.org/wiki/El_Se%C3%B1or_de_los_Anillos:_el_retorno_del_Rey#Reparto">aquí</a>.</p>
            </Elenco>
        </div>
    );
}

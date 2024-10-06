'use strict'
import '../css/pelicula.css'

export function Elenco({ actores, children, titulo }) {
    return (
        <div className='elenco'>
            <h2>Elenco de la pelicula {titulo}</h2>
            {actores.map(({ nombre, urlImagen, infoActor }, indice) => (
                <div className='elenco-actor' key={indice} >
                    <div className="elenco-imagen">
                        <img src={urlImagen} alt={`Imagen de ${nombre}`} />
                    </div>
                    <div className="elenco-nombre">
                        <h3>{nombre}</h3>
                        <p>{infoActor}</p>
                    </div>

                </div>
            ))}
            <div>{children}</div>
        </div>
    );
}

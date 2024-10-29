const Galeria = ({ peliculas }) => {
    return (
        <main>
            <ul className="lista-imagenes">
                {
                    peliculas.map((pelicula) => (
                        <li key={pelicula.id}>
                            <img src={pelicula.cartelera} alt={`Imagen de ${pelicula.nombre}`} />
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
export default Galeria
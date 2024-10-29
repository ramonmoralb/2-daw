const Interpretes = ({ peliculas }) => {
    return (
        <main>
            <ul className="lista-actores">
                {peliculas.map((pelicula) =>
                (<li key={pelicula.id} className="e">
                    <p>{pelicula.nombre}</p>
                    {pelicula.actores.map((a, i) => (
                        <p key={i}>{a.nombre}</p>
                    ))}
                </li>)
                )}
            </ul>
        </main>
    )
}
export default Interpretes
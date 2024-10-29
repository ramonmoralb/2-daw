const Peliculas = ({ peliculas }) => {
    return (
        <main>
            {peliculas.map((pelicula) => (
                <div key={pelicula.id}>
                    <p>{pelicula.nombre}</p>
                </div>
            ))}
        </main>
    );
}
export default Peliculas;

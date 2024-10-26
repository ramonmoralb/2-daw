import Pelicula from "./Pelicula";
// recibe por prop el JSON
const Peliculas = ({ peliculas }) => {
    return (
        <div className="container__app">

            {peliculas.map((pelicula) => ( // es necesario para reenderizar map(iteraciones) KEY con un identificador que debe ser único
                <Pelicula
                    key={pelicula.id} // id único
                    nombre={pelicula.nombre}
                    cartelera={pelicula.cartelera}
                    actores={pelicula.actores}
                />
            ))}
        </div>
    );
};

export default Peliculas;
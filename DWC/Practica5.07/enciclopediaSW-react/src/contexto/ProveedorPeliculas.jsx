import { createContext, useState, useEffect } from "react";
import { getFilms } from "../api/api.js";

const contexto = createContext();

const Proveedor = ({ children }) => {
    const [peliculas, setPeliculas] = useState([]);

    // efecto que se ejecuta cada vez que se carga la página.
    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const { peliculas, error } = await getFilms();
                if (error === null) {
                    setPeliculas(peliculas);
                } else {
                    setPeliculas(error);
                }
            } catch (error) {
                console.log(error.message)
                setPeliculas(null);
            }
        };
        fetchEpisodes();
    }, []);


    return <contexto.Provider value={peliculas}>{children}</contexto.Provider>;
};

export default Proveedor;
export { contexto };

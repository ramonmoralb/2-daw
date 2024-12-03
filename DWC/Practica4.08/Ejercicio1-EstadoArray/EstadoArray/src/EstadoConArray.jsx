import { useState } from "react";

const numerosAleatorios = [];

const EstadoConArray = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState();

    const generarNumero = () => {
        const nuevoNumero = Math.floor((Math.random() * 100) + 1);
        setNumeroAleatorio(nuevoNumero)

        if (!numerosAleatorios.includes(numeroAleatorio)) {
            numerosAleatorios.push(numeroAleatorio)
        }

        console.log(numerosAleatorios)
    };

    return (
        <div>
            <div id="botonera">
                <button onClick={generarNumero}>Generar</button>
                <button>Eliminar</button>
            </div>
            <p id="parrafo">Lista </p>
            <ul>
                {
                    numerosAleatorios.map((numero, indice) =>
                    (
                        <li key={indice}>{numero}</li>
                    )
                    )
                }
            </ul>
        </div>
    );
};

export { EstadoConArray };

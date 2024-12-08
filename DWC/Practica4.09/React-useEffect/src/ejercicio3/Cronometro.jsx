import { useState } from "react";

const Cronometro = () => {
    const [segundos, setSegundos] = useState(0);
    const [centesimas, setCentesimas] = useState(0);
    const [intervalo, setIntervalo] = useState(null);

    const iniciarContador = () => {
        if (!intervalo) {
            const nuevoIntervalo = setInterval(() => {
                setCentesimas(prevCentesimas => {
                    if (prevCentesimas === 99) {
                        setSegundos(prevSegundos => prevSegundos + 1);
                        return 0
                    }
                    return prevCentesimas + 1
                });
            }, 10);
            setIntervalo(nuevoIntervalo);
        }
    };

    const pararContador = () => {
        clearInterval(intervalo);
        setIntervalo(null);
    };

    const reiniciarContador = () => {
        setSegundos(0);
        setCentesimas(0);
        iniciarContador();
    };

    return (
        <div>
            <h2>Cronometro sin useEffect</h2>
            <div>
                <button onClick={iniciarContador}>Empezar</button>
                <button onClick={pararContador}>Pausar</button>
                <button onClick={reiniciarContador}>Reiniciar</button>
            </div>

            <div>
                <p>Segundos: {segundos} Centésimas: {centesimas}</p>
            </div>
        </div>
    );
};

export { Cronometro };

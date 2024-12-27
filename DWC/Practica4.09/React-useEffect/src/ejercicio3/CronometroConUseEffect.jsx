import { useEffect, useState } from "react";

const CronometroConUseEffect = () => {
    const [segundos, setSegundos] = useState(0);
    const [centesimas, setCentesimas] = useState(0);
    const [intervalo, setIntervalo] = useState(null);
    const [accion, setAccion] = useState("pausa");

    useEffect(() => {

        let nuevoIntervalo;

        if (accion === "empezar" && !intervalo) {
            nuevoIntervalo = setInterval(() => {
                setCentesimas((prevCentesimas) => {
                    if (prevCentesimas === 99) {
                        setSegundos((prevSegundos) => prevSegundos + 1);
                        return 0;
                    }
                    return prevCentesimas + 1;
                });
            }, 10);
            setIntervalo(nuevoIntervalo);
        } else if (accion === "pausa" && intervalo) {
            clearInterval(intervalo);
            setIntervalo(null);
        }


        return () => {
            if (intervalo) {
                clearInterval(intervalo);
            }
        };
    }, [accion, intervalo]);


    useEffect(() => {
        if (accion === "reiniciar") {
            setSegundos(0);
            setCentesimas(0);


            if (intervalo) {
                clearInterval(intervalo);
                setIntervalo(null);
            }


            if (accion !== "pausa") {
                setAccion("pausa");
            }
        }
    }, [accion, intervalo]);
    const manejarEmpezar = () => setAccion("empezar");
    const manejarPausar = () => setAccion("pausa");
    const manejarReiniciar = () => setAccion("reiniciar");

    return (
        <div>
            <h2>Cronometro con useEffect</h2>
            <button onClick={manejarEmpezar}>Empezar</button>
            <button onClick={manejarPausar}>Pausar</button>
            <button onClick={manejarReiniciar}>Reiniciar</button>
            <div>
                <p>Segundos: {segundos} Centésimas: {centesimas}</p>
            </div>
        </div>
    );
};

export { CronometroConUseEffect };

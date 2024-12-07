import { useState } from "react"
import '../css/euromillones.css'
const EuroMillones = () => {

    const combinacionGanadora = {
        "numeros": [5, 45, 21, 34, 27],
        "estrellas": [6, 12]
    }

    const [boletos, setBoletos] = useState([])

    const generarBoleto = () => {
        let boleto
        const numeros = []
        const estrellas = []
        for (let i = 0; i < 6; i++) {
            let numeroAleatorio = Math.floor((Math.random() * 50) + 1)
            if (numeros.includes(numeroAleatorio)) {// comprueba para no repetir número
                i--
            } else {
                numeros.push(numeroAleatorio)
            }
        }
        for (let i = 0; i < 2; i++) {
            let estrellaAleatoria = Math.floor((Math.random() * 12) + 1)
            if (estrellas.includes(estrellaAleatoria)) { // para no repetir estrella
                i--
            } else {
                estrellas.push(estrellaAleatoria)
            }
        }
        boleto = {
            "numeros": numeros,
            "estrellas": estrellas
        }
        setBoletos(prev => [...prev, boleto])
        // console.log(boletos)
    }

    const comprobarBoleto = (boleto, resultado) => {
        const estrellasAcertadas = []
        const numerosAcertados = []
        boleto.estrellas.forEach(estrella => {
            if (resultado.estrellas.includes(estrella)) {
                estrellasAcertadas.push(estrella)
            }
        })
        boleto.numeros.forEach(numero => {
            if (resultado.numeros.includes(numero)) {
                numerosAcertados.push(numero)
            }
        });
        return {
            "numerosAcertados": numerosAcertados,
            "estrellasAcertadas": estrellasAcertadas,
            "premiado": numerosAcertados.length >= 2 && estrellasAcertadas.length >= 1 ? true : false
        }

    }



    return (
        <div className="contenedor-euromillon">
            <h1>Euro Millones</h1>
            <button onClick={generarBoleto}>Generar boleto</button>
            {boletos.length > 0 && <p className="combinacion-ganadora">
                <strong>Combinacion ganadora:</strong>
                <span>Numeros: {combinacionGanadora.numeros.join(" ")}</span>
                <span>Estrellas: {combinacionGanadora.estrellas.join(" ")}</span>
            </p>}
            <ul>
                {boletos.map((boleto, index) => {
                    const aciertos = comprobarBoleto(boleto, combinacionGanadora);
                    const premiado = aciertos.premiado
                    return (
                        <li className={`apuesta ${premiado ? "premiado" : ""}`} key={index}>
                            <p>
                                <strong>Apuesta:</strong>
                                <span>Números: {boleto.numeros.join(", ")}</span>
                                <span> Estrellas: {boleto.estrellas.join(", ")}</span>
                            </p>
                            <p>
                                <strong>Aciertos:</strong>
                                <span> Números acertados: {aciertos.numerosAcertados.join(", ") || "Ninguno"}</span>
                                <span> Estrellas acertadas: {aciertos.estrellasAcertadas.join(", ") || "Ninguna"}</span>
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export { EuroMillones };
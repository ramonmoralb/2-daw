import { useState } from "react";

const EstadoConArray = () => {
    const generarNumeroAleatorio = () => {
        return Math.floor((Math.random() * 100) + 1)
    }
    const [numeros, setNumeros] = useState([])
    const anadirALista = () => {
        setNumeros(valorAnterior => [...valorAnterior, generarNumeroAleatorio()])
    }
    const borrarListaCompleta = () => {
        setNumeros([])
    }

    const borrarPorIndice = (indice) => {
        setNumeros(valorAnterior => valorAnterior.filter((_, i) => i !== indice))
    }

    return <div>
        <button onClick={anadirALista} >Generar</button>
        <button onClick={borrarListaCompleta}>Eliminar</button>
        <ul>
            {numeros.map((numero, indice) =>
            (
                <li onClick={() => {
                    borrarPorIndice(indice)
                }} key={indice}> {numero}</li>
            )
            )}
        </ul>
    </div >

}

export { EstadoConArray }
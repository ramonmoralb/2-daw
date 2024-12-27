import { useEffect, useState } from "react"

const Localizador = () => {
    const [posY, setPosY] = useState(0)
    const [posX, setPosx] = useState(0)

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setPosx(e.clientX)
            setPosY(e.clientY)
        })
        return () => {
            document.removeEventListener('mousemove', (e) => {
                setPosx(e.clientX)
                setPosY(e.clientY)
            })
        }
    }, [])
    return <div>
        <div>
            <h2>Posición del puntero</h2>
            <p>Posición x: {posX}</p>
            <p>Posición y: {posY}</p>
        </div>
    </div>

}
export { Localizador }
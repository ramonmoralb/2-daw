import { useEffect } from "react"


const Colorines = () => {
    const generarColorAleatorio = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `rgb(${r},${g},${b})`
    }

    useEffect(() => {
        document.addEventListener('dblclick', () => {
            document.body.style.backgroundColor = generarColorAleatorio()
        })
        return () => document.removeEventListener('dblclick', () => {
            document.body.style.backgroundColor = generarColorAleatorio()
        })
    }, [])

}
export { Colorines }
import { cargarLista } from "../modelo/modelo.js"
import { mostrarResumen } from "../controlador/controlador.js"


const listaTitulo = async () => {
    const ul = document.createElement('ul')
    const listaPeliculasJson = await cargarLista()
    listaPeliculasJson.forEach(pelicula => {
        const { title, episode_id, url } = pelicula
        const pTitulo = document.createElement('p')
        const pId = document.createElement('p')
        const li = document.createElement('li')
        li.classList.add("li-titulo")
        pTitulo.innerHTML = `Titulo: ${title}`
        pTitulo.classList.add("p-titulo")
        pTitulo.onclick = () => { mostrarResumen(url) }
        pId.innerHTML = `Id episodio: ${episode_id}`
        li.appendChild(pTitulo)
        li.appendChild(pId)
        ul.appendChild(li)
        const div = document.getElementById('lista')
        div.appendChild(ul)
    });
}

export { listaTitulo }

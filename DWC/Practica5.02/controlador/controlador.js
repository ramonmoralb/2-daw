import { peliculaPorId, cargarLista } from "../modelo/modelo.js";


const mostrarResumen = async (url) => {
    const containerInfo = document.getElementById("info-pelicula")
    containerInfo.innerHTML = "<p>Buscando pelicula...</p>";
    const pelicula = await peliculaPorId(url)
    const { title, opening_crawl, director, release_date, producer } = pelicula

    var partesFecha = release_date.split("-")
    partesFecha = partesFecha.reverse()
    const fechaEuropea = partesFecha.join("-")
    const html = `  
    <div class="contenedor-resumen">
        <h2>Datos de la película</h2>
            <div class="sipnopsis">
                <p>Sipnopsis: ${opening_crawl}</p>
                <p>Director: ${director} </p>
                <p>Producer: ${producer} </p>
                <p>Fecha de estreno: ${fechaEuropea}</p>
            </div>
    </div>
        `;
    containerInfo.innerHTML = html;
}


export { mostrarResumen };
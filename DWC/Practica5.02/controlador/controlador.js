import { peliculaPorId, cargarLista } from "../modelo/modelo.js";
//import { pelicula } from "../mockups/pelicula.js";


const mostrarResumen = async (url) => {
    const containerInfo = document.getElementById("info-pelicula")
    containerInfo.innerHTML = "<p>Buscando pelicula...</p>";
    const pelicula = await peliculaPorId(url)
    const { opening_crawl, director, release_date, producer } = pelicula
    console.log(pelicula.release_date)
    var partesFecha = release_date.split("-")
    partesFecha = partesFecha.reverse()
    const fechaEuropea = partesFecha.join("-")
    const html = `  
        <h2>Datos de la película</h2>
            <div class="sipnopsis">
                <p>Sipnopsis: ${opening_crawl}</p>
                <p>Director: ${director} </p>
                <p>Producer: ${producer} </p>
                <p>Fecha de estreno: ${fechaEuropea}</p>
            </div>
        `;
    containerInfo.innerHTML = html;
}


export { mostrarResumen };
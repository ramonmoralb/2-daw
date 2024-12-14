import { peliculaPorId, interpretePorId } from "../modelo/modelo.js";
const detallesInterpretes = (interprete) => {
    const { name, gender, height, hair_color, eye_color } = interprete;
    const liAnadir = document.getElementById(`li-${name.trim()}`);
    let divDetalles = liAnadir.querySelector('.detalles-interprete');

    if (divDetalles) {
        divDetalles.remove();
    } else {
        divDetalles = document.createElement("div");
        divDetalles.classList.add("detalles-interprete");
        const datosInterpretes = `
            <p>Género: ${gender}</p>
            <p>Altura: ${height}</p>
            <p>Color pelo: ${hair_color}</p>
            <p>Color ojos: ${eye_color}</p>
        `;
        divDetalles.innerHTML = datosInterpretes;
        liAnadir.appendChild(divDetalles);
    }
};


const mosrtarInterpretes = async (interptretesUrl, interpretesAmostrar = 10) => {
    const div = document.createElement("div")

    const ul = document.createElement("ul")

    for (let i = 0; i < interpretesAmostrar; i++) {
        const li = document.createElement("li")
        const interprete = await interpretePorId(interptretesUrl[i]);
        const { name } = interprete;
        li.id = `li-${name.trim()}`
        const spanClick = document.createElement("span")
        spanClick.onclick = () => detallesInterpretes(interprete)
        spanClick.innerHTML = `Nombre:  ${name}`

        li.appendChild(spanClick)
        ul.appendChild(li)
        //  console.log(interprete);

    }
    div.appendChild(ul)
    return div

}


const mostrarResumen = async (urlPelicula) => {
    const containerInfo = document.getElementById("info-pelicula")
    containerInfo.innerHTML = "<p>Buscando pelicula...</p>";
    const pelicula = await peliculaPorId(urlPelicula)
    const { title, opening_crawl, director, release_date, producer, url, characters } = pelicula
    const listaInterpretesHtml = await mosrtarInterpretes(characters)
    var partesFecha = release_date.split("-")
    partesFecha = partesFecha.reverse()
    const fechaEuropea = partesFecha.join("-")
    const divContResumen = document.createElement("div")
    divContResumen.classList.add("contenedor-resumen")


    const html = `  
        <h2>Datos de la película: ${title}</h2>
            <div class="sipnopsis">
                <p>Sipnopsis: ${opening_crawl}</p>
                <p>Director: ${director} </p>
                <p>Producer: ${producer} </p>
                <p>Fecha de estreno: ${fechaEuropea}</p>
            </div>

        `;

    divContResumen.innerHTML = html
    divContResumen.appendChild(listaInterpretesHtml)

    containerInfo.appendChild(divContResumen)
}


export { mostrarResumen };
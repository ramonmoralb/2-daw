import { peliculaPorId, interpretePorId } from "../modelo/modelo.js";
const detallesInterpretes = (interprete) => {
    const { name, gender, height, hair_color, eye_color } = interprete;
    const liAnadir = document.getElementById(`li-${name.replace(" ", "").toLowerCase()}`);
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
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Personajes: ";
    div.appendChild(h2)
    const ul = document.createElement("ul");
    ul.classList.add("lista-ineterpretes");

    //garantiza que no se rompa el programa si el parametro opcional de interpretes es mayor que el array
    if (interptretesUrl.lenght > interpretesAmostrar) {
        interpretesAmostrar = interptretesUrl.lenght;
    }

    for (let i = 0; i < interpretesAmostrar; i++) {
        try {
            const li = document.createElement("li");
            const interprete = await interpretePorId(interptretesUrl[i]);
            const { name } = interprete;
            li.id = `li-${name.replace(" ", "").toLowerCase()}`;
            li.classList.add("li-interpretes")

            const spanClick = document.createElement("span");
            spanClick.classList.add("span-nombre-interprete");
            spanClick.onclick = () => detallesInterpretes(interprete);
            spanClick.innerHTML = `<strong>${name}</strong>`;

            li.appendChild(spanClick);
            ul.appendChild(li);
        } catch (error) {
            console.log(error);
            div.innerHTML = `Fallo al recuperar el interprete `;
        }

    };
    div.appendChild(ul);
    return div;
}


const mostrarResumen = async (urlPelicula) => {
    const containerInfo = document.getElementById("info-pelicula")
    var html = "<p>Cargando...</p>";
    containerInfo.innerHTML = html;
    try {
        const pelicula = await peliculaPorId(urlPelicula)
        const { title, opening_crawl, director, release_date, producer, url, characters } = pelicula
        const listaInterpretesHtml = await mosrtarInterpretes(characters)
        var partesFecha = release_date.split("-")
        partesFecha = partesFecha.reverse()
        const fechaEuropea = partesFecha.join("-")
        const divContResumen = document.createElement("div")
        divContResumen.classList.add("contenedor-resumen")


        html = `  
        <h2>Datos de la película: ${title}</h2>
            <div class="sipnopsis">
                <p>Sipnopsis: ${opening_crawl}</p>
                <p>Director: ${director} </p>
                <p>Producer: ${producer} </p>
                <p>Fecha de estreno: ${fechaEuropea}</p>
            </div>

        `;
        containerInfo.innerHTML = "";
        divContResumen.innerHTML = html
        divContResumen.appendChild(listaInterpretesHtml)
        containerInfo.appendChild(divContResumen)
    } catch (error) {
        console.log(error)
        containerInfo.innerHTML = `<p>Algo falló</p>`;

    }
}


export { mostrarResumen };
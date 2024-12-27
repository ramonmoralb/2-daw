document.addEventListener("DOMContentLoaded", () => {

    const recuperarGentuza = () => {
        fetch("https://swapi.py4e.com/api/people/")
            .then((respuesta) => respuesta.json())
            .then(respuesta => respuesta.results)
            .then(respuesta => {
                const divGentuza = document.getElementById("div-gentuza")
                divGentuza.innerHTML = JSON.stringify(respuesta)
            }
            )
            .catch(error => console.log(error))
    }
    recuperarGentuza();




})
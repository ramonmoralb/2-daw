document.addEventListener("DOMContentLoaded", () => {
    const recuperarFeos = () => {
        setTimeout(() => (
            fetch("./feos.json")
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    const ordenado = data.sort((a, b) => a.first_name.localeCompare(b.first_name));
                    const ul = document.createElement("ul");
                    const div = document.getElementById("feos-div");
                    ordenado.forEach(element => {
                        const li = document.createElement("li");
                        li.innerHTML = JSON.stringify(element);
                        ul.appendChild(li);
                    });
                    div.appendChild(ul);

                })
                .catch((error) => console.log(error))
        ), 3000);
    };
    recuperarFeos();
})
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("anadirAgenda");
    const cargarAgenda = () => {
        return JSON.parse(localStorage.getItem("agenda")) || [];
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apellidos = e.target.apellidos.value
        const telefono = e.target.telefono.value
        if (!nombre) {
            // aquí validaciones
        }
        else {
            const jsonContacto = {
                "nombre": nombre,
                "apellidos": apellidos,
                "telefono": telefono
            }
            const agenda = cargarAgenda();
            agenda.push(jsonContacto);
            localStorage.setItem("agenda", JSON.stringify(agenda));
        }
        const agenda = cargarAgenda()
        console.log(agenda)

    })

});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('crearParrafo').addEventListener('click', function () {
        const texto = document.getElementById('texto').value;
        const estiloSeleccionado = document.getElementById('estilos').value
        const errorDiv = document.getElementById('error')
        const resultadoDiv = document.getElementById('resultado')

        errorDiv.style.display = 'none'

        if (!texto || !estiloSeleccionado) {
            errorDiv.style.display = 'block'
            errorDiv.textContent = 'Tienes que escribir algo y seleccionar un estilo.'
            return
        }

        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.classList.add(estiloSeleccionado);
        nuevoParrafo.textContent = texto

        resultadoDiv.appendChild(nuevoParrafo)

        document.getElementById('texto').value = ''
        document.getElementById('estilos').value = ''
    });
});

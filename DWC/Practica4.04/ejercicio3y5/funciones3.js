const anadirDisco = () => {
    const nombre = document.getElementById('nombre')
    const nombreIncorrecto = document.getElementById('error-nombre')
    const grupoInterprete = document.getElementById('nombre-grupo-interprete')
    const grupoIncorrecto = document.getElementById('error-grupo')
    const anio = document.getElementById('anio')
    const anioIncorrecto = document.getElementById('error-anio')
    const generoMusical = document.getElementById('genero-musical')
    const generoIncorrecto = document.getElementById('error-genero')
    const localizacion = document.getElementById('localizacion')
    const localizacionIncorrecta = document.getElementById('error-localizacion')
    const prestado = document.querySelector('input[name="prestado"]:checked')

    if (nombre.value.trim().length < 5) {
        nombreIncorrecto.textContent = 'El nombre debe tener al menos 5 caracteres'
    } else {
        nombreIncorrecto.textContent = ''
    }

    if (grupoInterprete.value.trim().length < 5) {
        grupoIncorrecto.textContent = 'El grupo debe tener al menos 5 caracteres'
    } else {
        grupoIncorrecto.textContent = ''
    }

    const anioRegex = /^\d{4}$/
    if (!anioRegex.test(anio.value.trim())) {
        anioIncorrecto.textContent = 'El año debe tener 4 dígitos numéricos'
    } else {
        anioIncorrecto.textContent = ''
    }

    if (generoMusical.value === '') {
        generoIncorrecto.textContent = 'Debes seleccionar un género musical'
    } else {
        generoIncorrecto.textContent = ''
    }

    const localizacionRegex = /^ES-\d{3}[A-Z]{2}$/
    if (!localizacionRegex.test(localizacion.value.trim())) {
        localizacionIncorrecta.textContent = 'La localización debe tener el formato ES-001AA'
    } else {
        localizacionIncorrecta.textContent = ''
    }

    if (
        nombre.value.trim().length >= 5 &&
        grupoInterprete.value.trim().length >= 5 &&
        anioRegex.test(anio.value.trim()) &&
        generoMusical.value !== '' &&
        localizacionRegex.test(localizacion.value.trim())
    ) {
        return {
            nombre: nombre.value.trim(),
            grupoInterprete: grupoInterprete.value.trim(),
            anio: anio.value.trim(),
            generoMusical: generoMusical.value,
            localizacion: localizacion.value.trim(),
            prestado: prestado.value === 'prestado-si'
        }
    }
    return null
}

const mostrar = (arr) => {
    const lista = document.createElement('ul')

    arr.forEach((disco, index) => {
        let li = document.createElement('li')
        li.textContent = `Disco ${index + 1}: 
                          Nombre: ${disco.nombre}, 
                          Grupo/Intérprete: ${disco.grupoInterprete}, 
                          Año: ${disco.anio}, 
                          Género: ${disco.generoMusical}, 
                          Localización: ${disco.localizacion}, 
                          Prestado: ${disco.prestado ? 'Sí' : 'No'}`
        lista.appendChild(li)
    })

    const contenedor = document.getElementById('lista-discos')
    contenedor.appendChild(lista)
}

export { anadirDisco, mostrar }

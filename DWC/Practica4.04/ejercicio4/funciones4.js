function actualizarPoblaciones() {
    const provincia = document.getElementById('provincia').value
    const poblacion = document.getElementById('poblacion')

    poblacion.innerHTML = '<option value="">No seleccionado</option>'

    if (provincia === 'Alicante') {
        poblacion.innerHTML += '<option value="Alicante">Alicante</option>'
        poblacion.innerHTML += '<option value="Elche">Elche</option>'
        poblacion.innerHTML += '<option value="Petrer">Petrer</option>'
        poblacion.innerHTML += '<option value="Elda">Elda</option>'
    } else if (provincia === 'Castellón') {
        poblacion.innerHTML += '<option value="Castellón">Castellón</option>'
        poblacion.innerHTML += '<option value="Oropesa">Oropesa</option>'
        poblacion.innerHTML += '<option value="Vinaroz">Vinaroz</option>'
    } else if (provincia === 'Valencia') {
        poblacion.innerHTML += '<option value="Valencia">Valencia</option>'
        poblacion.innerHTML += '<option value="Xàtiva">Xàtiva</option>'
        poblacion.innerHTML += '<option value="Torrent">Torrent</option>'
    }
}

function validarFormulario() {
    const provincia = document.getElementById('provincia').value
    const poblacion = document.getElementById('poblacion').value

    if (!provincia || !poblacion) {
        alert('Debes seleccionar una provincia y luego una ciudad')
        return false
    }

    return true
}
export { actualizarPoblaciones, validarFormulario }
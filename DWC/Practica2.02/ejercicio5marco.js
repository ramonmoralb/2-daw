function dibujarMarco(tamanoExterior, tamanoInterior) {
    'use strict'
    if (tamanoExterior % 3 !== 0) return console.error('Se debe introducir un tamaño exterior divisible entre 3')
    if (tamanoExterior <= 0 || tamanoInterior <= 0) return console.error('Se deben introducir números positivos')
    var marco = [];
    var margen = (tamanoExterior - tamanoInterior) / 2
    // Crea las líneas del marco
    for (let i = 0; i < tamanoExterior; i++) {
        var linea = ''

        for (let j = 0; j < tamanoExterior; j++) {
            // Si la posición está en el margen agrega un '#'
            if (i < margen || i >= tamanoExterior - margen || j < margen || j >= tamanoExterior - margen) {
                linea += '#'
                // Si está fuera del margen agrega un '*'
            } else {
                linea += '*'
            }
        }
        marco.push(linea);

    }
    marco.forEach((e, i) => {
        console.log(e, (i + 1).toString())
    })
}

dibujarMarco(21, 9);
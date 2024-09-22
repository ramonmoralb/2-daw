function dibujarCruz(lado) {
    'use strict';
    if (lado % 3 !== 0) return console.error('No es divisible entre tres')
    var tercio = lado / 3 // Calcula el tercio de los lados
    var linea = new Array(lado)
    var figura = new Array()
    var contador = 0;

    for (let i = 0; i < lado; i++) {
        // Si el contador está en el rango central .
        if (contador >= tercio && contador < 2 * tercio) {
            for (let j = 0; j < lado; j++) {
                linea[j] = '*'
            }
        } else {
            // En las otras líneas la cruz solo debe aparecer en la parte central vertical.
            for (let j = 0; j < lado; j++) {
                if (j >= tercio && j < 2 * tercio) {
                    linea[j] = '*'
                } else {
                    linea[j] = '#'
                }
            }
        }
        contador++;
        figura.push(linea.join(''))
    }
    figura.forEach((e, i) => {
        console.log(e, ((i + 1).toString()))
    })
}

dibujarCruz(9)
dibujarCruz(8)
dibujarCruz(21)
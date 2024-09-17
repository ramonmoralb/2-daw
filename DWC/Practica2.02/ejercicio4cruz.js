function dibujarCruz(lado) {
    'use strict';
    if (lado % 3 !== 0) return console.error('No es divisible entre tres')
    var tercio = lado / 3;
    var a = new Array(lado);
    var count = 0;
    for (let i = 0; i < lado; i++) {
        if (count >= tercio && count < 2 * tercio) {
            for (let j = 0; j < lado; j++) {
                a[j] = '*';
            }
        } else {
            for (let j = 0; j < lado; j++) {
                if (j >= tercio && j < 2 * tercio) {
                    a[j] = '*';
                } else {
                    a[j] = '#';
                }
            }
        }
        count++;
        console.log(a.join('  '));
    }
}

dibujarCruz(9);
dibujarCruz(8);
dibujarCruz(21);
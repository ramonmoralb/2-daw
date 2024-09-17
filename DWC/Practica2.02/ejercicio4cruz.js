function dibujarCruz(lado) {
    'use strict';

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
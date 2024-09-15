'use strict'
function multiplicar(n) {
    if (n <= 2) return console.log('Debe de introducirse un valor mayor de 2')
    for (let i = 0; 10 >= i; i++) {
        console.log(i, ' x ', n, ' = ', (i * n))
    }
}

function tablas(n, fn) {
    if (n <= 2) return console.log('Debe de introducirse un valor mayor de 2')
    for (let i = 2; n >= i; i++) {
        fn(i)
        console.log('\t')
    }
}


tablas(5, multiplicar)
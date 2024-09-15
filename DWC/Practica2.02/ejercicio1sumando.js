
function suma() {
    'use strict'
    if (arguments.length < 2) return console.error('Se deben introducir al menos dos parámetros')
    var result = 0
    for (let i = 0; arguments.length > i; i++) {
        if (isNaN(arguments[i])) return console.error('Los datos no son correctos')
        result = result + arguments[i]
    };
    return console.log(result)
}
suma(7)
suma(7, 4)

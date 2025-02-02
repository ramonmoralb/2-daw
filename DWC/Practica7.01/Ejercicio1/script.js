"use strict"
document.addEventListener("DOMContentLoaded", () => {
    String.prototype.repetir = function (veces) {

        if (typeof veces !== 'number' || !Number.isInteger(veces) || veces < 0) {
            throw new Error("El argumento debe ser un número entero positivo.");
        }
        return this.repeat(veces);
    };

    console.log("¡Viva JavaScript!".repetir(3));
    console.log("Hola".repetir(0));
    console.log("Mundo".repetir(-1));
})

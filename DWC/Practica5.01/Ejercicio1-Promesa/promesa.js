document.addEventListener("DOMContentLoaded", () => {
    const numeroAleatorio1a100 = () => {
        return Math.floor((Math.random() * 100) + 1)
    }
    const tiempoAleatorio1a3 = () => {
        return Math.floor((Math.random() * 3) + 1) * 1000;
    }
    const esPar = (n) => {
        return n % 2 === 0;
    }

    const promesaPares = new Promise((resolver, rechazar) => {
        setTimeout(() => {
            const numeroAleatorio = numeroAleatorio1a100()
            if (esPar(numeroAleatorio)) {
                resolver(`El número es par (${numeroAleatorio})`);
            } else {
                rechazar(new Error(`Error: El número es impar (${numeroAleatorio})`))
            }
        }, tiempoAleatorio1a3())

    });

    promesaPares
        .then(respuesta => { console.log(respuesta) })
        .catch(error => {
            console.log(error.message)
        })

})
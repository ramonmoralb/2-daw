const discente = {
    id: 1,
    nombre: 'Antonio Sanchez Moraira',
    aficiones: ['Música', 'Tenis', 'Fotografia'],
    notas: {
        primeraEvaluacion: 7,
        segundaEvaluacion: 8,
        terceraEvaluacion: 9
    },

    calcularMedia: function () {
        const { primeraEvaluacion, segundaEvaluacion, terceraEvaluacion } = this.notas
        const p = ((primeraEvaluacion + segundaEvaluacion + terceraEvaluacion) / 3)
        return p.toFixed(2)
    },
    imprimirAficiones: function () {
        return this.aficiones.join(' - ')
    },
    // pruebas
    imprimirInforme: function () {
        for (a in this) {
            if (a === 'imprimirInforme') return
            if (typeof this[a] === 'function') {
                console.log(a, this[a]())
            }

            else {
                console.log(a, this[a])
            }

        }
    }
}
discente.imprimirInforme()
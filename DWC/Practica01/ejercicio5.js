
function porcentajePropina(total) {
    if (!isNaN(total)) {
        if (total < 50) {
            return total * 0.2
        } else if (total >= 50 && total < 200) {
            return total * 0.15
        } else if (total >= 200) {
            return total * 0.1
        } else {
            console.log('Valor no válido')
            return 0
        }
    } else {
        console.log('No es un número')
        return 0;
    }
}


function mostrarFacturas(facturas) {
    const propinas = facturas.map(f => porcentajePropina(f))
    const totales = facturas.map((factura, i) => factura + propinas[i])

    console.log('FACTURA    PROPINA  TOTAL')
    console.log('------------------------------')
    facturas.forEach((factura, index) => {
        console.log(`${factura.toFixed(2)}  -  ${propinas[index].toFixed(2)} -  ${totales[index].toFixed(2)}`);
    });
}


const facturas = [40, 75, 250];
mostrarFacturas(facturas);


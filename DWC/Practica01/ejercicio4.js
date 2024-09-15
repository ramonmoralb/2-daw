function invoices(name = 'Producto genérico', value = 100, tax = 21) {
    const validValues = !isNaN(value) && !isNaN(tax) && typeof name === 'string';
    console.log(
        `${validValues ? `Producto: ${name} - Precio: ${(value + (value * tax / 100)).toFixed(2)}` : 'Datos inválidos'}`
    );
}
invoices()
invoices('Pelotas', 7, 8)
invoices('Pelotas', 'error', 8)

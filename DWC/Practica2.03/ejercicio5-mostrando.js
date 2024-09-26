'use strcit'
function mostrando(e) {
    //almacena los datos para mapear
    const resultado = []

    for (let p in e) {
        const tipo = typeof e[p];
        const nombre = p;
        const valor = e[p];

        resultado.push({
            nombre: nombre,
            // ternarias para casos de arrays o funciones
            valor: tipo === 'function' ? 'Función no imprimible' : valor,
            tipo: Array.isArray(valor) ? 'array' : tipo
        });
    }
    resultado.map(a => console.log('clave-> ', a.nombre, ' Valor-> ', a.valor, ' Tipo ->', a.tipo))
}


const objeto = {
    nombre: 'Nombre de objeto',
    antiguedad: 1999,
    caracteristicas: ['Bueno', 'bonito', 'barato'],
    obj: { nombre: 'Objeto', antiguedad: 46 },
    fn: () => { console.log('Función de prueba'); }
};

mostrando(objeto)

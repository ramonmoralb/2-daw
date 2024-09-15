const equipos = [
    { equipo: 'Juan', puntos: [89, 120, 103] },
    { equipo: 'Migel', puntos: [116, 94, 123] },
    { equipo: 'María', puntos: [97, 134, 105] }
    // , { equipo: 'empate', puntos: [97, 134, 105] } // para probar el empate
]


function printPoints(points, name) {
    console.log(`Los puntos del equipo de ${name} son ${points.join(' - ')} y su media es ${averagePoints(points)} puntos`)
}

function printAllTeamPoints(equipos) {
    equipos.forEach(equipo => {
        printPoints(equipo.puntos, equipo.equipo)
    });
}

function averagePoints(points) {
    return points.reduce((acumalador, punto) => acumalador + punto, 0) / points.length
}

function printWinner(equipos) {
    const promedios = equipos.map(equipo => averagePoints(equipo.puntos));
    const maxPro = Math.max(...promedios);  //... spread operator, propaga todas las iteraciones del array
    const winner = equipos.filter(equipo => averagePoints(equipo.puntos) === maxPro); // filter devuelve un array find el object

    if (winner.length > 1) {
        console.log(`Ha habido un empate:`)
        winner.forEach(team => {
            console.log(`Equipo de ${team.equipo} puntuación media ${averagePoints(team.puntos)} `)
        })
    }
    else {
        console.log(`El equipo ganador es el de ${winner[0].equipo} , con una media de ${averagePoints(winner[0].puntos)}`)
    }
}


printAllTeamPoints(equipos)
printWinner(equipos)









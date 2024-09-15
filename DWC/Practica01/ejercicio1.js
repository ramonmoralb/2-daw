function imcCalculator(masa, altura) {
    return (masa / (altura ** 2)).toFixed(2)
}

const imcComparator = (subject1, subject2) => {
    return imcCalculator(subject1.masa, subject1.altura) < imcCalculator(subject2.masa, subject2.altura)
}
const marcos = { name: 'Marcos', masa: 60, altura: 1.80 }
const juan = { name: 'Juan', masa: 70, altura: 1.80 }

console.log(`¿Tiene ${marcos.name} un IMC menor que ${juan.name}?  ${imcComparator(marcos, juan)}`)
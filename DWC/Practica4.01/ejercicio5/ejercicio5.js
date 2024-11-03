document.addEventListener('DOMContentLoaded', () => {
    const papeleraC = document.getElementById('papelera')
    const papel = document.getElementById('papel')
    papeleraC.draggable
    papeleraC.ondrag = () => {
        console.log('fragando')
    }
    papeleraC.ondragover = () => {
        console.log('dropando')
    }
    papel.draggable

    papeleraC.onclick = ((event) => {
        if (event.target.src.includes('llena.png')) {
            event.target.src = './vacia.png'
        } else if (event.target.src.includes('vacia.png')) {
            event.target.src = './llena.png'
        }
    })
})


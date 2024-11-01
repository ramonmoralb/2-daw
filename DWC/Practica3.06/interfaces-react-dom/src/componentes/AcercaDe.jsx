import infoApp from '../objetos/infoapp.json'
const AcercaDe = () => {
    return (
        <div className='acercade'>
            <h2>Información sobre la App <strong>{infoApp.nombreapp}</strong></h2>
            <ul className='lista-info'>
                <li className='item-info'><h3>Desarrollador: {infoApp.desarrollador}</h3></li>
                <li className='item-info'><h3>Version: {infoApp.version}</h3></li>
                <li className='item-info'><h3>Fecha modificación: {infoApp.fechamodificacion}</h3></li>
            </ul>

        </div>
    )
}
export default AcercaDe
const Recaudacion = ({ refRecaudacion, recaudacion }) => {
    return (
        <div ref={refRecaudacion} className="recaudacion">
            <p>Recaudación en táquilla: {recaudacion}</p>
        </div>)
}
export default Recaudacion
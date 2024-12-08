import { useState, useEffect } from "react";
import "./listadelacompra.css";
const ListaDelaCompra = () => {
    var producto = {
        "id": "",
        "nombre": "",
        "descripcion": "",
        "unidadesAComprar": 1,
        "precioUnitario": 0,
        "subtotal": 0
    };
    const [data, setData] = useState(producto);
    const [errorNombre, setErrorNombre] = useState("");
    const [errorDescripcion, setErrorDescripcion] = useState("");
    const [errorUnidades, setErrorUnidades] = useState("");
    const [errorPrecio, setErrorPrecio] = useState("");
    const [lista, setLista] = useState([]);
    const [contador, setContador] = useState(0);
    const [totalCarrito, setTotalCarrito] = useState(0);

    function manejarCambio(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    function manejarEnvio(e) {
        e.preventDefault();
        const { nombre, descripcion, unidadesAComprar, precioUnitario } = data;
        const unidadesInt = parseInt(unidadesAComprar);
        const precioUnitarioFloat = parseFloat(precioUnitario);

        if (nombre.length < 5) {
            return setErrorNombre("El nombre debe tener 5 caracteres al menos");
        } else {
            setErrorNombre("");

            if (descripcion.length < 5) {
                return setErrorDescripcion("La descripción debe tener 5 caracteres al menos");
            } else {
                setErrorDescripcion("");
            }
            if (isNaN(unidadesInt) || unidadesInt < 1) {
                return setErrorUnidades("Las unidades a comprar deben ser un número positivo");
            } else {
                setErrorUnidades("");
            }
            if (isNaN(precioUnitarioFloat) || precioUnitarioFloat < 0.01) {
                return setErrorPrecio("El precio debe de ser un número positivo");
            } else {
                setErrorPrecio("");
            }

            setContador((prev) => prev + 1);
            setLista((listaPrevia) => [
                ...listaPrevia,
                { ...data, id: contador, subtotal: unidadesAComprar * precioUnitario }
            ]);
            setData(producto);
        }
    }

    useEffect(() => {
        let total = 0;
        lista.forEach((p) => total += p.subtotal);
        setTotalCarrito(total);
    }, [lista]);

    function eliminar(id) {

        let indice = lista.findIndex((p) => p.id === id);
        var eliminar = prompt("Seguro que de desea eliminar (si/no)")
        if (eliminar === "si") {
            setLista((prevLista) => prevLista.filter((_, index) => index !== indice));
        } else {
            return
        }
    }

    return (
        <div className="container">
            <div className="titulo">
                <h1>Lista de la compra</h1>
            </div>
            <div className="formulario">
                <h2>Formulario</h2>
                <form>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre: </label>
                        <input id="nombre" name="nombre" value={data.nombre} onChange={manejarCambio} />
                        {errorNombre && <p className="error">{errorNombre}</p>}
                    </div>
                    <div className="campo">
                        <label htmlFor="descripcion">Descripción: </label>
                        <input id="descripcion" name="descripcion" value={data.descripcion} onChange={manejarCambio} />
                        {errorDescripcion && <p className="error">{errorDescripcion}</p>}
                    </div>
                    <div className="campo">
                        <label htmlFor="unidadesAComprar">Unidades a comprar: </label>
                        <input type="number" id="unidadesAComprar" name="unidadesAComprar" value={data.unidadesAComprar} onChange={manejarCambio} />
                        {errorUnidades && <p className="error">{errorUnidades}</p>}
                    </div>
                    <div className="campo">
                        <label htmlFor="precioUnitario">Precio unitario: </label>
                        <input id="precioUnitario" name="precioUnitario" value={data.precioUnitario} onChange={manejarCambio} />
                        {errorPrecio && <p className="error">{errorPrecio}</p>}
                    </div>
                    <div className="campo">
                        <button onClick={manejarEnvio} className="boton">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="lista-compra">
                <h2>Lista de la compra</h2>
                {lista.length > 0 ? (
                    <ul>
                        {lista.map((p) => (
                            <li onClick={() => eliminar(p.id)} key={p.id} className="producto-item">
                                <p>Producto: {p.nombre}</p>
                                <p>Descripción: {p.descripcion}</p>
                                <p>Unidades a comprar: {p.unidadesAComprar}</p>
                                <p>Precio unidad: {p.precioUnitario}</p>
                                <p>Total precio: {p.subtotal}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay productos en la lista</p>
                )}
            </div>
            {totalCarrito > 0 &&
                <div className="total">
                    <h2>Total carrito</h2>
                    <p>{totalCarrito}</p>
                </div>
            }
            {lista.length > 0 &&
                <div className="borrar-lista">
                    <button onClick={() => setLista([])} className="boton">Borrar lista</button>
                </div>
            }
        </div>
    );
};

export { ListaDelaCompra };

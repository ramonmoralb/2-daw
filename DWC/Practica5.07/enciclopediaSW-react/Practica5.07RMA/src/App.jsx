import Proveedor from "./contexto/ProveedorPeliculas";
import { ListaPeliculas } from "./componentes/ListaPeliculas";

const App = () => {
  return (
    <Proveedor>
      <ListaPeliculas />
    </Proveedor>
  );
};

export default App;

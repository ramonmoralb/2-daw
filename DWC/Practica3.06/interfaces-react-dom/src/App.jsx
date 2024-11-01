import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import './css/app.css'
import Contenido from "./enrutador/Contenido"
import Menu from "./componentes/Menu"
import menu from './objetos/menu.json'


function App() {


  return (
    <>
      <Header >
        <Menu barNavClass={'bar-nav-inicio'} ulClass={'lista-nav-inicio'} itemsMenu={menu.menuInicio} />
      </Header>
      <Contenido />
      <Footer />
    </>
  )
}

export default App
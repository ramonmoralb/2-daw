import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import './css/app.css'
import Contenido from "./routes/Contenido"
import Menu from "./componentes/Menu"


function App() {
  const menuInicio = [
    {
      ruta: '/',
      texto: 'Inicio'

    },
    {
      ruta: '/peliculas',
      texto: 'Peliculas'
    },
    {
      ruta: '/galeria',
      texto: 'Galeria',
      subMenu: [
        { ruta: "/galeria/titulo", texto: "Filtrar por Título" },
        { ruta: "/galeria/interprete", texto: "Filtrar por Intérprete" },
        { ruta: "/galeria/director", texto: "Filtrar por Director" }
      ]
    },
    {
      ruta: '/interpretes',
      texto: 'Interpretes'
    },
    {
      ruta: '/acercade',
      texto: 'Acerca de'
    }
  ]
  return (
    <>
      <Header >
        <Menu barNavClass={'bar-nav-inicio'} ulClass={'lista-nav-inicio'} itemsMenu={menuInicio} />
      </Header>


      <Contenido />
      <Footer />
    </>
  )
}

export default App
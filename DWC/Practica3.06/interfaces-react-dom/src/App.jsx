

import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import './css/app.css'
import Contenido from "./routes/Contenido"
import Menu from "./componentes/Menu"

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Contenido />
      <Footer />
    </>
  )
}

export default App
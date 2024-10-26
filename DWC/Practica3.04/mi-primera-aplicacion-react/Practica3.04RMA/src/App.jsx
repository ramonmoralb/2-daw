import peliculas from "./objetos/peliculas.json"
import Peliculas from "./componentes/Peliculas"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import './css/app.css'

function App() {
  return (
    <>
      <Header />
      <Peliculas peliculas={peliculas.peliculas} />
      <Footer />
    </>
  )
}

export default App
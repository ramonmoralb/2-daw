import './css/App.css'
import { Pelicula } from './componentes/Peliculas.jsx' // importo el componenete peliculas
import { pelicula } from './constantes/pelicula.js'// importo const pelicula


function App() {

  return (
    <Pelicula
      titulo={pelicula.titulo}
      director={pelicula.director}
      cartela={pelicula.cartela}
    >
      <p>
        El Señor de los Anillos: El Retorno del Rey, dirigido por Peter Jackson, es la conclusión épica de la trilogía basada en la obra maestra de J.R.R. Tolkien. La historia se centra en la lucha final entre las fuerzas del bien y el mal, representadas por la Tierra Media y el oscuro señor Sauron. La trama se desarrolla en un contexto de guerra, sacrificio y heroísmo, con el destino del mundo pendiendo de un hilo.
        La película comienza con un vistazo al pasado de Gollum, el antiguo portador del Anillo Único. Su historia se entrelaza con la de Frodo y Sam, quienes continúan su arduo viaje hacia Mordor. Acompañados por Gollum, que oscila entre la lealtad y la traición, los hobbits enfrentan enormes peligros y tentaciones. Mientras tanto, en el reino de Gondor, la amenaza de Sauron se hace palpable. Las fuerzas de la oscuridad se reúnen para asediar la ciudad de Minas Tirith, lo que lleva a un conflicto inevitable.
        Aragorn, descendiente del antiguo rey, se enfrenta a su destino. A lo largo de la historia, su evolución de un guerrero renuente a un líder decidido es uno de los temas centrales. Se une a Legolas y Gimli para unir a los pueblos libres de la Tierra Media en la lucha contra Sauron. Juntos, viajan al reino de Rohan para buscar aliados. La lucha en el campo de batalla se convierte en un símbolo de resistencia y valor, mientras los personajes enfrentan sus propios miedos y debilidades.
        El clímax de la historia se desarrolla en la batalla por Minas Tirith, donde las fuerzas de Sauron atacan con una ferocidad devastadora. La escena de la batalla es épica, con un despliegue masivo de guerreros, bestias y magia. A pesar de las pérdidas significativas, la valentía de los personajes principales brilla en medio del caos. Aragorn se enfrenta al Rey Brujo, mientras que Gandalf lidera la defensa de la ciudad.
        Simultáneamente, Frodo y Sam se encuentran cada vez más cerca de su destino en el Monte del Destino. La presión del Anillo se vuelve abrumadora para Frodo, que se debate entre su deseo de destruirlo y su creciente obsesión. Gollum, en su búsqueda por recuperar el Anillo, se convierte en un antagonista trágico, impulsado por su propia historia de traición y deseo. El viaje a través de Mordor se convierte en un símbolo de resistencia y sacrificio.
      </p>
    </Pelicula>

  )
}

export default App

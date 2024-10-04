import './pelicula.css'
import { Elenco } from './Elenco';
export function Pelicula({ titulo, director, cartela, children }) {
    const actores = [
        {
            nombre: 'Viggo Mortensen',
            urlImagen: 'https://media.vanityfair.com/photos/669290c3356f6aeadc316681/2:3/w_1920,c_limit/2156534488',
            infoActor: 'Viggo Peter Mortensen Jr. (Nueva York, 20 de octubre de 1958) es un actor y director de cine danés estadounidense. Por sus interpretaciones ha sido nominado en tres ocasiones a los Premios Óscar, en cuatro a los Premios Globo de Oro y una vez a los Premios Goya. También ejerce como poeta, músico, fotógrafo y pintor.'
        },
        {
            nombre: 'Elijah Wood',
            urlImagen: 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/plus-jeune-ou-plus-vieux-ils-ne-font-pas-leur-age/quel-age-a-elijah-wood/19683084-1-fre-FR/Quel-age-a-Elijah-Wood.jpg',
            infoActor: ' Es conocido especialmente por su papel como Frodo Bolsón en la trilogía de El Señor de los Anillos (2001-2003). Después de esto, ha interpretado papeles variados en películas que han sido bien recibidas por los críticos, como Eternal Sunshine of the Spotless Mind (2004), Sin City (2005), Green Street Hooligans (2005), Bobby (2006), Everything Is Illuminated (2006) y Grand Piano (2013).[cita requerida]'
        },
        {
            nombre: 'Ian McKellen',
            urlImagen: 'https://fotografias.antena3.com/clipping/cmsimages02/2024/06/18/5C6BD37B-CA07-4E49-81F2-0DE3710AD1D4/actor-ian-mckellen_58.jpg?crop=3133,1776,x0,y94&width=1000&height=567&optimize=high&format=webplyhttps://www.lanacion.com.ar/resizer/v2/ian-UOBB3NWPBZECZELKZ2WSYFAMBA.jpg?auth=82fe0f272e3efb8ead7cf3e58f0010a621c761ddbd0b98276aaf5890c98cdd3f&width=880&height=586&quality=70&smart=truehttps://media.gq.com/photos/662298c01df7097bb446408d/master/w_1920,c_limit/bloomrld.jpgps://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/plus-jeune-ou-plus-vieux-ils-ne-font-pas-leur-age/quel-age-a-elijah-wood/19683084-1-fre-FR/Quel-age-a-Elijah-Wood.jpg',
            infoActor: 'Ian Murray McKellen (Burnley, Inglaterra, 25 de mayo de 1939)1​ es un actor británico de cine y teatro. Es ganador de siete premios Laurence Olivier, un Globo de Oro, un Tony, dos premios del Sindicato de Actores, un BIF y dos premios de la Crítica Cinematográfica; y ha sido nominado al Óscar en dos ocasiones'
        }
    ]
    return (
        <div className='contenedor'>
            <div className='titulo'>
                <h1>{titulo}</h1>
                <h2>Director: {director}</h2>
            </div>
            <div className='cartela'>
                <img src={cartela} alt={`Cartel de ${titulo}`} />
            </div>
            <div className='resumen'>
                {children}
            </div>
            <Elenco titulo={titulo} actores={actores}>
                <p>Este es parte del elenco para ver más pulse <a href="https://es.wikipedia.org/wiki/El_Se%C3%B1or_de_los_Anillos:_el_retorno_del_Rey#Reparto">aquí</a>.</p>
            </Elenco>
        </div>
    );
}

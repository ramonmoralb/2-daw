<?php
class Juego extends Soporte{
    public string $consola;
    private int $minNumJugadores;
    private int $maxNumJugadores;

    public function __construct($titulo, $numero, $precio,$consola, $minNumJugadores, $maxNumJugadores){
        parent::__construct($titulo, $numero, $precio);
        $this->consola=$consola;
        $this->maxNumJugadores=$maxNumJugadores;
        $this->minNumJugadores=$minNumJugadores;
    }
    public function muestraJugadoresPosibles(){
        
        echo $this->maxNumJugadores === 1 
        ? "Para un jugador.<br>" 
        : "De " . $this->minNumJugadores . " a " . $this->maxNumJugadores . " jugadores.<br>";
       
    }
    public function muestraResumen() {
        echo "Videojuego <br>";
        echo "Juego para: ". $this->consola ."<br>";
        parent::muestraResumen();
        $this->muestraJugadoresPosibles();
    }
}
?>
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
        echo "<br>";
        echo $this->maxNumJugadores === 1 
        ? "Para un jugador." 
        : "De " . $this->minNumJugadores . " a " . $this->maxNumJugadores . " jugadores.<br>";
        echo "<br>";
    }
    public function muestraResumen() {
        parent::muestraResumen();
        $this->muestraJugadoresPosibles();
    }
}
?>
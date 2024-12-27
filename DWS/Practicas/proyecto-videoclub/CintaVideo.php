<?php
class CintaVideo extends Soporte {
    private int $duracion;

    public function __construct($titulo, $numero, $precio, $duracion) {
        parent::__construct($titulo, $numero, $precio);
        $this->duracion = $duracion;
    }

    public function muestraResumen() {
        
        echo "Cinta de vídeo <br>";
        parent::muestraResumen();
        echo " Duración: " . $this->duracion . " minutos.<br>";
    }
}
?>

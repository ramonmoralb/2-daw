<?php
class Soporte {
    public string $titulo;
    protected int $numero;
    private float $precio;
    private static float $IVA = 0.21; 

    public function __construct($titulo, $numero, $precio) {
        $this->titulo = $titulo;
        $this->numero = $numero;
        $this->precio = $precio;
    }
    public function getNumero(){
        return $this->numero;
    }

    public function getPrecio() {
        return $this->precio;
    }

    public function getPrecioConIva(){
        return $this->precio + ($this->precio * self::$IVA);
    }

    public function muestraResumen() {
        echo $this->titulo . "<br>" . $this->precio . " Euros (IVA no incluido)<br>";
    }
}
?>

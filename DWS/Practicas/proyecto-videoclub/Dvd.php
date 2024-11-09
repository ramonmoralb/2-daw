<?php
class Dvd extends Soporte{
    public string $idiomas;
    private $formatoPantalla;

    public function __construct($titulo, $numero, $precio, $idiomas, $formatoPantalla){
        parent::__construct($titulo, $numero, $precio);
        $this->idiomas=$idiomas;
        $this->formatoPantalla=$formatoPantalla;
    }
    public function muestraResumen(){
        echo "DVD <br>";
        parent::muestraResumen();
        echo "Idiomas: " . $this->idiomas ."<br>"; 
        echo "Formato pantalla: " . $this->formatoPantalla . "<br>";
    }
}
?>
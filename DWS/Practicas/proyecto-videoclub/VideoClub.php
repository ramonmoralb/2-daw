<?php
include_once "Soporte.php";
include_once "CintaVideo.php";
include_once "Dvd.php";
include_once "Juego.php";
include_once "Cliente.php";

class VideoClub{
    private String $nombre;
    private array $productos = [];
    private int $numProductos;
    private array $socios = [];

    public function __construct($nombre){
        $this->nombre = $nombre;
    }
    //metodos para añadir productos
    private function incluirProducto(Soporte $producto){
        array_push($this->productos, $producto);
    }

    public function incluirCintaVideo($titulo , $precio, $duracion){
        //cuenta los productos y le suma uno
        $numProd = count($this->productos);
            $this->incluirProducto(new CintaVideo($titulo, $numProd ,$precio, $duracion));
                echo "Añadido producto " . $numProd ."<br>";    
    }

    public function incluirDvd($titulo, $precio, $idiomas, $pantalla){
        $numProd = count($this->productos);
            $this->incluirProducto(new Dvd($titulo, $numProd ,$precio, $idiomas, $pantalla));
                echo "Añadido producto " . $numProd ."<br>";
    }

    public function incluirJuego($titulo, $precio, $consola, $minNumJugadores, $maxNumJugadores){
        $numProd = count($this->productos);
            $this->incluirProducto(new Juego($titulo, $numProd ,$precio, $consola, $minNumJugadores, $maxNumJugadores));
                echo "Añadido producto " . $numProd ."<br>";
    }
    public function incluirSocio($nombre, $maximoAlquileresRecurrentes=3){
        $numSocio = count($this->socios);
        array_push($this->socios, new Cliente($nombre, $numSocio ,$maximoAlquileresRecurrentes));
            echo "Añadido socio " . $numSocio."<br>";
    }

    public function listarProductos(){
        $index = 1;
        if(count($this->productos)>0){
             foreach($this->productos as $producto){
                echo $index . " - ";
                $producto->muestraResumen();
                $index++;
                echo "<br>";
             }
        } else{
            echo "No hay productos";
        }
    }

    public function listarSocios(){
        $index = 1;
        if(count($this->socios)>0){
             foreach($this->socios as $socio){
                echo $index . " - ";
                $socio->muestraResumen();
                $index++;
                echo "<br>";
             }
        } else{
            echo "No hay productos";
        }
    }


    public function alquilaSocioProducto($numSocio, $numProducto){
     
        $socios = array_filter($this->socios , function($s) use($numSocio){
            return $s->getNumero() === $numSocio;
        });
        $soportes = array_filter($this->productos, function($p) use($numProducto){
            return $p->getNumero() === $numProducto;
        });
        // despues de un filter, php mantiene las referencias anteriores, reset devuelve el primer elemento
        $socio = reset($socios);
        $soporte = reset($soportes);
        $socio->alquilar($soporte);
        
       
    }


    public function getNombre(){
        return $this->nombre;
    }

    //metodo para pruebas
    public function ver(){
        echo "asdf";
        echo $this->productos[0]->getNumero();
    }



}
?>
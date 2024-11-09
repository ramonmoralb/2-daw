<?php
class Cliente {
    public String $nombre;
    private int $numero;
    private array $soportesAlquilados = [];
    private int $numeroSoportesAlquilados = 0;
    private int $maxAlquilerRecurrente;

    public function __construct($nombre, $numero, $maxAlquilerRecurrente=3){
        $this->nombre = $nombre;
        $this->numero = $numero;
        $this->maxAlquilerRecurrente= $maxAlquilerRecurrente;
    }

    public function getNumero(){
        return $this->numero;
    }

    public function setNumero($numero){
        $this->numero=$numero;
    }
    public function getNumeroSoportesAlquilados(){
        return $this->soportesAlquilados;
    }
  

 
    public function muestraResumen(){  
        $titulos=[];
        foreach($this->soportesAlquilados as $soporte){
          array_push($titulos,$soporte->titulo);
        }
        echo "<hr>El cliente" .$this->nombre . "<br>Tiene un total de " . count($this->soportesAlquilados) ." soportes alquilados." . "<br>Lista: <br>" . implode("<br>" , $titulos) . "<hr>";
    }

//
    public function tieneAlquilado(Soporte $s) {
        foreach($this->soportesAlquilados as $sop){
           if($sop->getNumero()===$s->getNumero()){
                return true;
           }
        }
        return false;
    }


    public function alquilar(Soporte $soporte){
        if(!$this->tieneAlquilado($soporte) && $this->numeroSoportesAlquilados<$this->maxAlquilerRecurrente){
          array_push($this->soportesAlquilados , $soporte);
          echo "<br> <strong>Alquilado soporte a </strong>: ". $this->nombre ." <br>";
          $this->numeroSoportesAlquilados++;
          $soporte->muestraResumen();         
        }else{
            if($this->tieneAlquilado($soporte)){
            echo "<br>";
            echo  "El cliente ya tiene alquilado el soporte: " . $soporte->titulo;
            echo "<br>";
            }else{ 
           echo "<br>El cliente ya tiene ". $this->maxAlquilerRecurrente . " alquilados, no puede alquilar más hasta que devuelva algo al videoclub <br>";
        }
        }    
        
    }
    /**
    *  devolver(int $numSoporte): bool → Debe comprobar que el soporte estaba alquilado y actualizar la cantidad de soportes alquilados. 
    * Para cada caso debe mostrar un mensaje informando de lo ocurrido
    * listarAlquileres(): void → Informa de cuantos alquileres tiene el cliente y los muestra.
    */
    public function devolver($numero){
        // para filtrar php necesita una función como aquí
    $devuelve = false;
       $soportes = array_filter($this->soportesAlquilados, function($soporte) use($numero){
            return $soporte->getNumero() === $numero;
       });
    
       if(count($soportes)==0){
        echo "Este cliente no tiene alquilado ningún elemento";
         return $devuelve;}
        $indice = 0;
        if(count($soportes)){     
            foreach($this->soportesAlquilados as $soporte){                 
                if($soporte->getNumero()===$numero){
                    array_splice($this->soportesAlquilados, $indice, 1);
                    echo "El cliente ". $this->nombre . " ha devuelto correctamente el soporte numero  " . $soporte->getNumero() .".";
                    $soportesAlquilados--;
                    $devuelve = true;
                }
            $indice++;
            }
           
        }else{
            echo "<br> No se ha podido encontrar este soporte en los alquileres del cliente.<br>" ;
        }
        return $devuelve;
    }
    public function listaAlquileres(){
        $totalAlquileres =  count($this->soportesAlquilados);
        if($totalAlquileres>0){
            echo "<br>El cliente " . $this->nombre ." con número " . $this->numero . ", tiene alaquilados un total de " . $totalAlquileres ."<br>";
            echo "Lista de soportes <br>";
            foreach($this->soportesAlquilados as $soporte){
                $soporte->muestraResumen();
                echo "<br>";
            }
            echo "<hr>";
        }
        else{
            echo "El cliente " . $this->nombre ." con número " . $this->numero . ",no tiene soportes alaquilados";
            echo "<hr>";
        }
    }

    
}
?>
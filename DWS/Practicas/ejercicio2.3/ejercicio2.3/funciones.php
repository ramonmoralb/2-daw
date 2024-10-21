<?php
//ejercico 1
function euros2Dolar($cantidadEuros, $cotizacionEuroDolar = 1.18) {
    return $cantidadEuros * $cotizacionEuroDolar;
}
function dolar2Euro($cantidadDolares, $cotizacionDolarEuro = 0.85) {
    return $cantidadDolares * $cotizacionDolarEuro;
}

//ejercicio 2 

$arrayRef = [1,2,3,4,5,6];
function sumarArray(&$arr, $multiplicador=1){
    $suma=0;
    for($i = 0;$i<count($arr); $i++){
        $arr[$i] = $arr[$i]*$multiplicador;
        $suma += $arr[$i]; 
    }
    return $suma;
}

/** ejercicio 3*/
// solo el ultimo operrador puede ser variadic ...$VAR
// diferente delimitador es un boleano que recibirá true o false, de no ser así, 
// usaria siempre como delimitador el primer parametro,!!No se me ocurre otra solución al ejercicico!!
function concatenadorString($diferenteDelimitador, ...$argumentos) {
    $delimitador = " ";
    if ($diferenteDelimitador) {
        $delimitador = $argumentos[0];
        //  array_slice(array; posicion desde donde retorna el Array, posición hasta donde retorna del array(si no se pasa este param, retorna hasta el final))
        $arrStr = array_slice($argumentos, 1);
    } else {
        $arrStr = $argumentos; 
    }
    // implode retorna la concatenacion del array, se le puede pasar como primer parametro
    // delimitador, si no se le pasa por defecto es ""
    return implode($delimitador, $arrStr);
}


/**ejercicio4*/

 $arrayEjercicio4= [1,2,3,4,5,6,7,8,9,10,11];
 $arrayEjercicio4_2= [1,2,3,4,5,6,7,8,9,10,11];
 
 

 function parFilter(&$arrayRef, $conImpares=false){
    $resultado;
    if(!$conImpares){
        $pares = array_filter($arrayRef,fn($n)=> $n %2 ===0);
        $resultado = array_map(fn($n)=> $n*2,$pares);
    }else{
        $resultado = array_map(fn($n) => $n %2 ===0 ? $n * 2 : $n , $arrayRef);
    }
    $arrayRef= $resultado;
    return $arrayRef;
 }

?>

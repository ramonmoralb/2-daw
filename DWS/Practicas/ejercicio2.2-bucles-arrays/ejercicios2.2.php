<?php 
/** 
 * Ejercicio 1
 * Rellena un array con 50 números aleatorios comprendidos entre el 0 y el 99, 
 * y luego muéstralo en una lista desordenada. Para crear un número aleatorio, 
 * utiliza la función rand(inicio, fin)*/
function arrayRand($n = 50){
    /**Si el param no se pasa por parametro a la ffunción está predefinido por defecto */
    $arr = [];
    for($i = 0;$i<$n;$i++){
        array_push($arr, rand(0,99));
    }
    return $arr;
}
function listaDesordenada($arr){
    echo "<ul>";
    foreach($arr as $n)
    echo "<li>$n</li>";
    echo "</ul>";
}
listaDesordenada(arrayRand());

/**A partir del ejercicio 230, genera un array aleatorio de 33 elementos con números comprendidos entre el 0 y 100 y calcula:
    El mayor
    El menor
    La media
 */
function elMayor($arr){
    return max($arr);
}
function elMenor($arr){
    return min($arr);
}
function laMedia($arr){
    return array_sum($arr) / count($arr);
}
function calculos($arr){ 

    return is_array($arr) ? ["El Mayor" => elMayor($arr), "El menor" => elMenor($arr), "La media" => laMedia($arr)] : "No es un parametro correcto";
}
$comprobacion = calculos(arrayRand(33));

foreach($comprobacion as $clave => $valor){
    echo $clave.  " => "  . $valor . "\n";
}


/**Ejercicio 2
 * 
 * Ejercicio 2: Añadir un valor en el array sin sobrescribir su valor
Mediante una sola función de PHP, modifica el array:
$frutas = ["naranja", "pera", "manzana"];
Para que antes del valor “pera” haya un valor “plátano”.
*/
$frutas = ["naranja", "pera", "manzana"];
function anadirPlatano($arr){
    $pos = array_search("pera", $arr);
    array_splice($arr, $pos , 0, "platano");
    return $arr;
}
$comprobaciona = anadirPlatano($frutas);
print_r($comprobaciona);

/**Ejercicio 3: 
 * Almacenar información de estudiantes y calcular el promedio de
*sus notas
*Dado un array asociativo con la información de varios estudiantes (nombre y su
*nota), imprime por pantalla la nota y el nombre de cada alumno y luego calcula y
*muestra el promedio total de las notas.
* $estudiantes = [ "Ana" => 8.5, "Juan" => 9.2, "Luis" => 7.8, "Marta" => 6.4, "Sofía" =>
*9.0 ]; */ 

 
$estudiantes = [ "Ana" => 8.5, "Juan" => 9.2, "Luis" => 7.8, "Marta" => 6.4, "Sofía" => 9.0 ];
function mostrarEstudiantes($arr){
    $notas = 0; 
    foreach($arr as $k => $v){
        echo "Alumno: " . $k  . " Nota: " . $v."\n";
        $notas += $v;
    }
    echo "La media total de las notas es de: " . $notas / count($arr) ."\n";
}
mostrarEstudiantes($estudiantes);

?>

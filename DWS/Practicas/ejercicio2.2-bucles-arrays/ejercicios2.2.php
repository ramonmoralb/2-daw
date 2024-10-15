<?php 
/** 
 * Ejercicio 1
 * Rellena un array con 50 números aleatorios comprendidos entre el 0 y el 99, 
 * y luego muéstralo en una lista desordenada. Para crear un número aleatorio, 
 * utiliza la función rand(inicio, fin)*/
function arrayRand($n = 50) {
    $arr = [];
    for ($i = 0; $i < $n; $i++) {
        array_push($arr, rand(0, 99));
    }
    return $arr;
}
function listaDesordenada($arr) {
    echo '<ul class="lista">';
    foreach ($arr as $n) {
        echo "<li>$n</li>";
    }
    echo '</ul>';
}

/**A partir del ejercicio 230, genera un array aleatorio de 33 elementos con números comprendidos entre el 0 y 100 y calcula:
    El mayor
    El menor
    La media
 */
function elMayor($arr) {
    return max($arr);
}

function elMenor($arr) {
    return min($arr);
}

function laMedia($arr) {
    return array_sum($arr) / count($arr);
}

function calculos($arr) {
    return is_array($arr) ? ["El Mayor" => elMayor($arr), "El Menor" => elMenor($arr), "La Media" => laMedia($arr)] : "No es un parámetro correcto";
}


function imprimirCalculos($arr) {
    $calculos = calculos($arr);
    echo '<ul><h3>Cálculos (Mayor, Menor, Media)</h3>';
    foreach ($calculos as $clave => $valor) {
        echo "<li>$clave: $valor</li>";
    }
    echo '</ul>';
}


/**Ejercicio 2
 * 
 * Ejercicio 2: Añadir un valor en el array sin sobrescribir su valor
Mediante una sola función de PHP, modifica el array:
$frutas = ["naranja", "pera", "manzana"];
Para que antes del valor “pera” haya un valor “plátano”.
*/
$frutas = ["naranja", "pera", "manzana"];

function anadirPlatano($arr) {
    $pos = array_search("pera", $arr);
    array_splice($arr, $pos, 0, "plátano");
    return $arr;
}

function imprimirFrutasAntesDespues($arrAntes) {
    echo '<div class="container-listas-frutas">';
    echo '<ul><h3>Frutas antes de añadir plátano</h3>';
    foreach ($arrAntes as $fruta) {
        echo "<li>$fruta</li>";
    }
    echo '</ul>';
    echo '<ul><h3>Frutas después de añadir plátano</h3>';
    foreach (anadirPlatano($arrAntes) as $fruta) { 
        echo "<li>$fruta</li>";
    }
    echo '</ul>';
    echo '</div>';
}


/**Ejercicio 3: 
 * Almacenar información de estudiantes y calcular el promedio de
*sus notas
*Dado un array asociativo con la información de varios estudiantes (nombre y su
*nota), imprime por pantalla la nota y el nombre de cada alumno y luego calcula y
*muestra el promedio total de las notas.
* $estudiantes = [ "Ana" => 8.5, "Juan" => 9.2, "Luis" => 7.8, "Marta" => 6.4, "Sofía" =>
*9.0 ]; */ 
$estudiantes = [ "Ana" => 8.5, "Juan" => 9.2, "Luis" => 7.8, "Marta" => 6.4, "Sofía" => 9.0 ];

function mostrarEstudiantes($arr) {
    $notas = 0;
    echo '<ul><h3>Notas de los estudiantes</h3>';
    foreach ($arr as $nombre => $nota) {
        echo "<li>Alumno: $nombre - Nota: $nota</li>";
        $notas += $nota;
    }
    $promedio = $notas / count($arr);
    echo "<li>Promedio total de las notas: $promedio</li>";
    echo '</ul>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Listas Desordenadas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Ejercicio con bucles y arrays</h1>
    </header>
    <div class="container">
        <h2>Lista de Números Aleatorios</h2>
        <?php
            $arrayAleatorio = arrayRand();
            listaDesordenada($arrayAleatorio);
        ?>

        <h2>Cálculos (Mayor, Menor, Media)</h2>
        <?php
            imprimirCalculos($arrayAleatorio);
        ?>

        <h2>Frutas Antes y Después de Añadir Plátano</h2>
        <?php
            imprimirFrutasAntesDespues($frutas);
        ?>

        <h2>Notas de Estudiantes y Promedio</h2>
        <?php
            mostrarEstudiantes($estudiantes);
        ?>
    </div>
    
    <footer>
        <small>Ejercicio de Ramón Moreno Albert</small>
    </footer>
</body>
</html>

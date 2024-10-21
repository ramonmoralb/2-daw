<?php
include 'funciones.php'; 
$resultado = ""; 
if (isset($_POST['cantidad']) && isset($_POST['seleccionConversion'])) {
    $cantidad = $_POST['cantidad'];
    $accion = $_POST['seleccionConversion']; 
    if (is_numeric($cantidad) && $cantidad > 0) {
        switch ($accion) {
            case 'euros2Dolar':
                $resultado = "$cantidad euros son " . euros2Dolar($cantidad) . " dólares."; 
            break;
            case 'dolar2Euro':
                $resultado = "$cantidad dólares son " . dolar2Euro($cantidad) . " euros.";
            break;
            }
    } else {
        $resultado = "Debes introducir un número válido.(Número natural, mayor que 0.)";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios 2.3</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Ejercicio 2.3 Ramón Moreno Albert</h1>
    </header>
    <div class="container">
        <div class="form">
            <h2>Conversión de Moneda</h2>
            <form action="index.php" method="post">
                <label for="cantidad">Cantidad:</label>   
                <input type="text" id="cantidad" name="cantidad" required>
                <label for="accion">Acción:</label>
                <select name="seleccionConversion">
                    <option value="euros2Dolar">Euros a Dólares</option>
                    <option value="dolar2Euro">Dólares a Euros</option>
                </select>
                <button type="submit">Convertir</button>
            </form>
            <div class="container__formulario__resultado">
                <?php if ($resultado): ?>
                    <h2>Resultado:</h2>
                    <p><?php echo $resultado; ?></p>
                <?php endif; ?>
            </div>
        </div>
        <div class="eje2">
            <h2>Ejercicio 2 Sumar array referencia</h2>
            <p>Array ref: <?= print_r($arrayRef); ?> Su suma con multiplicador por defecto es: <?= sumarArray($arrayRef); ?></p>
            <p>Array ref: <?= print_r($arrayRef); ?> Su suma con multiplicador por parámetro (5) es: <?= sumarArray($arrayRef, 5); ?></p>
        </div>
        <div class="eje3">
            <h2>Ejercicio 3 concatenar string</h2>
            <p>Se debe insertar true como primer argumento para que el siguiente argumento, la función la considere como un delimitador.</p>
            <p>Se debe pasar false como primer argumento para que el siguiente argumento, la función la considere como el primer elemento a concatenar, usará por defecto el delimitador " ".</p>
            <p>Con delimitador: <?= concatenadorString(true, " - ", "Hola", "mundo"); ?></p>
            <p>Sin delimitador: <?= concatenadorString(false, "Hola", "mundo"); ?></p>
        </div>
        <div class="eje4">
            <h2>Ejercicio 4 filtrar pares</h2>
            <p>Array original: <?= print_r($arrayEjercicio4); ?></p>
            <p>Multiplicados sin impares: <?= print_r(parFilter($arrayEjercicio4)); ?></p>
            <p>Multiplicados con impares: <?= print_r(parFilter($arrayEjercicio4_2, true)); ?></p>
        </div>
    </div>
    <footer>
        <p>Tarea realizada por Ramón Moreno Albert 2 DAW semipresencial.</p>
    </footer>
</body>
</html>
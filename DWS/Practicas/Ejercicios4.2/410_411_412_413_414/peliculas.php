<?php

if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["usuario"])) {
    die("El ususario debe <a href='index.php'>identificarse</a>.<br />");
}
$peliculas = ["Avengers: Endgame", "Star Wars: A New Hope", "The Matrix"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de películas.</title>

</head>

<body>
    <h1>Películas</h1>
    <p>Bienvenido: <?= $_SESSION["usuario"]; ?></p>
    <ul>
        <?php foreach ($peliculas as $pelicula) { ?>
            <li><?= $pelicula ?></li>
        <?php } ?>
    </ul>
    <a href="./series.php">Ir a series</a>
    <p>Pulse <a href="./logout.php">aquí</a> para salir</p>

</body>

</html>
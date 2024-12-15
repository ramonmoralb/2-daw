<?php

if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["usuario"])) {
    die("El ususario debe <a href='index.php'>identificarse</a>.<br />");
}
$peliculas = $_SESSION["listaPeliculas"];
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
        <?php if (empty($peliculas)) { ?>
            <li>No hay películas.</li>
        <?php } else { ?>
            <?php foreach ($peliculas as $pelicula) { ?>
                <li><?= $pelicula ?></li>
        <?php }
        } ?>
    </ul>
    <a href="./series.php">Ir a series</a>
    <p>Pulse <a href="./logout.php">aquí</a> para salir</p>

</body>

</html>
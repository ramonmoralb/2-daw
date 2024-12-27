<?php

if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["usuario"])) {
    die("El ususario debe <a href='index.php'>identificarse</a>.<br />");
}
$series = ["Stranger Things", "The Mandalorian", "Rick and Morty"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de series.</title>

</head>

<body>
    <h1>Series</h1>
    <p>Bienvenido: <?= $_SESSION["usuario"]; ?></p>
    <ul>
        <?php foreach ($series as $serie) { ?>
            <li><?= $serie ?></li>
        <?php } ?>
    </ul>
    <a href="./peliculas.php">Ir a películas</a>
    <p>Pulse <a href="./logout.php">aquí</a> para salir</p>

</body>

</html>
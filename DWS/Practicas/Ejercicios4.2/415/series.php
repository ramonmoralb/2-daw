<?php

if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["usuario"])) {
    die("El ususario debe <a href='index.php'>identificarse</a>.<br />");
}
if (isset($_SESSION["listaSeries"])) {
    $series = $_SESSION["listaSeries"];
} else {
    $series = [];
}
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
        <?php if (empty($series)) { ?>
            <li>No hay series.</li>
        <?php } else { ?>
            <?php foreach ($series as $serie) { ?>
                <li><?= $serie ?></li>
        <?php }
        } ?>
    </ul>
    <a href="./peliculas.php">Ir a películas</a>
    <p>Pulse <a href="./logout.php">aquí</a> para salir</p>

</body>

</html>
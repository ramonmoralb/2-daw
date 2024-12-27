<?php
$visitas = 1;
if (isset($_COOKIE["visitas"])) {
    $visitas = $_COOKIE["visitas"] + 1;
}
if (isset($_POST["reiniciar_visitas"])) {
    $visitas = 1;
}
setcookie("visitas", $visitas, time() + (60 * 5));
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visitas</title>
</head>

<body>
    <?php if ($visitas === 1) { ?>
        <p>Es tu primera visita</p>
    <?php } ?>
    <p>Vsitia Nº: <?= $visitas ?> </p>

    <form action="./cookies.php" method="post">
        <button type="submit" name="reiniciar_visitas">Reiniciar visitas</button>
    </form>
</body>

</html>
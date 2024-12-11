<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumen</title>
    <?php
    if (isset($_POST["enviar"])) {
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $email = $_POST["email"];
        $convivientes = $_POST["convivientes"];

        if (isset($_POST["sexo"])) {
            $sexo = $_POST["sexo"];
        } else {
            $sexo = "Sin definir";
        }

        //controlar las aficiones
        if (isset($_POST["aficiones"])) {
            $aficionesArr = $_POST["aficiones"];
            $aficiones = implode(" ", $aficionesArr);
        } else {
            $aficiones = "Sin aficiones";
        }
        //controlar menus
        if (isset($_POST["menus"])) {
            $menusArr = $_POST["menus"];
            $menus = implode(" ", $menusArr);
        } else {
            $menus = "Sin preferencias";
        }

        $enviado = true;
    } else {
        $enviado = false;
    }
    ?>
</head>

<body>
    <h1>Resumen</h1>
    <!--Si el formulari0 está enviado muestra el resumen
    de este modo controlo el acceso directo a la página sin 
    pasar por el submit del form.
    evita que se rompa la página    
-->
    <?php if ($enviado) { ?>
        <h2>Datos</h2>
        <p>Nombre: <?= $nombre === '' ? 'No ingresado' : $nombre ?></p>
        <p>Apellidos: <?= $apellidos === '' ? 'No ingresado' : $apellidos ?></p>
        <p>Genero: <?= $sexo ?></p>
        <p>Convivientes: <?= $convivientes  === '' ? 'No ingresado' : $convivientes ?></p>
        <p>Email: <?= $email === '' ? 'No ingresado' : $email ?></p>
        <p>Aficiones: <?= $aficiones ?></p>
        <p>Menus: <?= $menus ?></p>
    <?php } else { ?>
        <h2>Formulario no enviado</h2>
    <?php } ?>
    <a href="./formulario.html">Ir al formulario</a>

</body>

</html>
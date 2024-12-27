<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<form action="./login.php" method="POST">
    <p><?php
        if (isset($_POST["error"])) {
            echo $error;
        } ?></p>
    <label for="usuario">Usuario: </label>
    <input type="text" name="usuario" id="input-usuario">
    <label for="password">Contraseña </label>
    <input type="password" name="password" id="input-password">
    <input type="submit" name="entrar" value="Entrar">
</form>

<body>

</body>

</html>
<?php
include_once("./Formularios.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Login:.</h1>
    <?php if (isset($error)) { ?>

        <p class="error-registro"><?= $error ?></p>
    <?php } ?>

    <form method="post">

        <div class="form">
            <label for="email">Email:</label>
            <input type="email" name="email">
        </div>
        <div class="form">
            <label for="contrasena">
                Contraseña:
            </label>
            <input type="password" name="contrasena">
        </div>
        <div>
            <button type="submit" name="login_usuario">Resgistar</button>
        </div>
    </form>
</body>

</html>
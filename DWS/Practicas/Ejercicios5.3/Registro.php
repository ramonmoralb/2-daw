<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Registro de usuario.</h1>
    <?php if (isset($error)) { ?>
        <p class="error-registro">EL email introducido ya existe en la base de datos.</p>
    <?php } ?>

    <form method="post">
        <div class="form">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre">
        </div>
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
            <button type="submit" name="registrar_usuario">Resgistar</button>
        </div>
    </form>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>

<body>
    <h1>Variables de servidor</h1>
    <?php
    echo "PHP_SELF : " .  $_SERVER["PHP_SELF"] . "<br>";
    echo "SERVER_SOFTWARE : " . $_SERVER["SERVER_SOFTWARE"] . "<br>";
    echo "SERVER_NAME : " . $_SERVER["SERVER_NAME"] . "<br>";
    echo "REQUEST_METHOD : " . $_SERVER["REQUEST_METHOD"] . "<br>";
    echo "REQUEST_URI : " . $_SERVER["REQUEST_URI"] . "<br>";
    echo "QUERY_STRING : " . $_SERVER["QUERY_STRING"] . "<br>"; // parametros en url desde el "?"
    ?>
</body>

</html>
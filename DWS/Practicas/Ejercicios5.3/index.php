<?php
include_once("./Formularios.php");
if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["nombre"])) {
    die("El ususario debe <a href='Login.php'>identificarse</a>.<br />");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5.3 DAO</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        header h1 {
            text-align: center;
        }

        table {
            width: 75%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th,
        td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;

        }

        tr {
            height: 60px;
        }

        th {
            background-color: #f2f2f2;
        }

        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 10px;
            background: #fff;
            border: 1px solid #ccc;
        }

        label,
        input,
        button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }

        button {
            background-color: #007bff;
            border-radius: 4px;
            color: white;
            border: none;
            padding: 8px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .botones {
            display: flex;
            flex-direction: row;
            align-items: center;

        }
    </style>
</head>

<body>
    <header>
        <h1>Ejercicio 5.2 DAO</h1>
    </header>
    <main>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Director</th>
                    <th>Género</th>
                    <th>Año</th>

                </tr>
            </thead>
            <tbody>
                <?php if (count($peliculas) > 0) : ?>
                    <?php foreach ($peliculas as $pelicula) : ?>
                        <tr>
                            <td><?= $pelicula->getId(); ?></td>
                            <td><?= $pelicula->getTitulo(); ?></td>
                            <td><?= $pelicula->getTipo(); ?></td>
                            <td><?= $pelicula->getDirector(); ?></td>
                            <td><?= $pelicula->getGenero(); ?></td>
                            <td><?= $pelicula->getAnio(); ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr>
                        <td colspan="7">No hay películas.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
        <p>Pulse <a href="./Logout.php">aquí</a> para salir</p>
    </main>
</body>

</html>
<?php
include_once("./Formularios.php");
if (!isset($_SESSION)) {
    session_start();
}

if (!isset($_SESSION["nombre"])) {
    die("El ususario debe <a href='Login.php'>identificarse</a>.<br />");
}
if ($_SESSION["rol"] !== "admin") {
    die("El ususario debe ser un administrador <a href='Login.php'>identificarse</a>.<br />");
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
                    <th>Acciones</th>
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
                            <td class="botones">
                                <form method="POST">
                                    <input type="hidden" name="id_editar" value="<?= $pelicula->getId(); ?>">
                                    <button type="submit" name="editar_pelicula">Editar</button>
                                </form>
                                <form method="POST">
                                    <input type="hidden" name="idPeliculaEliminar" value="<?= $pelicula->getId(); ?>">
                                    <button type="submit" name="eliminar_pelicula">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr>
                        <td colspan="7">No hay películas.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>


        <form method="POST">
            <h2><?= $id_editar ? 'Editar Película' : 'Añadir Película'; ?></h2>
            <input type="hidden" name="id_editar" value="<?= $id_editar; ?>">
            <label for="titulo">Título:</label>
            <input type="text" name="titulo" id="titulo" value="<?= $titulo; ?>">
            <label for="tipo">Tipo:</label>
            <input type="text" name="tipo" id="tipo" value="<?= $tipo; ?>">
            <label for="director">Director:</label>
            <input type="text" name="director" id="director" value="<?= $director; ?>">
            <label for="genero">Género:</label>
            <input type="text" name="genero" id="genero" value="<?= $genero; ?>">
            <label for="anio">Año:</label>
            <input type="text" name="anio" id="anio" value="<?= $anio; ?>">
            <button type="submit" name="<?= $id_editar ? 'actualizar_pelicula' : 'insertar_pelicula'; ?>">
                <?= $id_editar ? 'Actualizar' : 'Añadir'; ?>
            </button>
            <?php if ($id_editar) : ?>
                <button type="submit" name="cancelar_edicion">Cancelar</button>
            <?php endif; ?>
        </form>
    </main>
    <p>Pulse <a href="./Logout.php">aquí</a> para salir</p>
</body>

</html>
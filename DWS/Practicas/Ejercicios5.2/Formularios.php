<?php
include_once("./Pelicula.php");
include_once("./PeliculaDao.php");

$dao = new PeliculaDao("localhost", "root", "", "videoclub");
$peliculas = $dao->obtenerPeliculas();

$titulo = $tipo = $genero = $director = $anio = $id_editar = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["insertar_pelicula"])) {
        $titulo = $_POST["titulo"];
        $tipo = $_POST["tipo"];
        $genero = $_POST["genero"];
        $director = $_POST["director"];
        $anio = $_POST["anio"];

        if (is_numeric($anio)) {
            $pelicula = new Pelicula($titulo, $tipo, $genero, $director, (int)$anio);
            $dao->insertPelicula($pelicula);
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            echo "Por favor ingresa un año válido.";
        }
    }

    if (isset($_POST["actualizar_pelicula"])) {
        $id = $_POST["id_editar"];
        $titulo = $_POST["titulo"];
        $tipo = $_POST["tipo"];
        $genero = $_POST["genero"];
        $director = $_POST["director"];
        $anio = $_POST["anio"];

        if (is_numeric($anio)) {
            $pelicula = new Pelicula($titulo, $tipo, $genero, $director, (int)$anio);
            $pelicula->setId($id);
            $dao->actualizarPelicula($pelicula);
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            echo "Por favor ingresa un año válido.";
        }
    }

    if (isset($_POST["editar_pelicula"])) {
        $id = $_POST["id_editar"];
        $pelicula = $dao->obtenerPeliculaPorId($id);
        $titulo = $pelicula->getTitulo();
        $tipo = $pelicula->getTipo();
        $genero = $pelicula->getGenero();
        $director = $pelicula->getDirector();
        $anio = $pelicula->getAnio();
        $id_editar = $pelicula->getId();
    }

    if (isset($_POST["eliminar_pelicula"])) {
        $id = $_POST["idPeliculaEliminar"];
        $dao->eliminarPelicula($id);
        header("Location: " . $_SERVER['PHP_SELF']);
    }

    if (isset($_POST["cancelar_edicion"])) {
        $titulo = $tipo = $genero = $director = $anio = $id_editar = "";
    }
}

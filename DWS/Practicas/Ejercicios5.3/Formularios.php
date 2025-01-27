<?php
include_once("./Pelicula.php");
include_once("./PeliculaDao.php");
include_once("./Usuario.php");
include_once("./UsuarioDAO.php");

$daoPelicula = new PeliculaDao("localhost", "root", "", "videoclub");
$peliculas = $daoPelicula->obtenerPeliculas();

$daoUsuario = new UsuarioDao("localhost", "root", "", "videoclub");
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
            $daoPelicula->insertPelicula($pelicula);
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
            $daoPelicula->actualizarPelicula($pelicula);
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            echo "Por favor ingresa un año válido.";
        }
    }

    if (isset($_POST["editar_pelicula"])) {
        $id = $_POST["id_editar"];
        $pelicula = $daoPelicula->obtenerPeliculaPorId($id);
        $titulo = $pelicula->getTitulo();
        $tipo = $pelicula->getTipo();
        $genero = $pelicula->getGenero();
        $director = $pelicula->getDirector();
        $anio = $pelicula->getAnio();
        $id_editar = $pelicula->getId();
    }

    if (isset($_POST["eliminar_pelicula"])) {
        $id = $_POST["idPeliculaEliminar"];
        $daoPelicula->eliminarPelicula($id);
        header("Location: " . $_SERVER['PHP_SELF']);
    }

    if (isset($_POST["cancelar_edicion"])) {
        $titulo = $tipo = $genero = $director = $anio = $id_editar = "";
    }

    /**ususarios */

    if (isset($_POST["registrar_usuario"])) {
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $password = $_POST["contrasena"];
        if ($daoUsuario->obetenerUsuarioPorEmail($email)) {
            $error = "El email ya existe en la base de datos";
        } else {
            $daoUsuario->registrarUsuario(new Usuario($nombre, $email, $password));
        }
    }

    if (isset($_POST["login_usuario"])) {
        $email = $_POST["email"];
        $password = $_POST["contrasena"];
        $usuario = $daoUsuario->obetenerUsuarioPorEmail($email);

        if ($usuario === null) {
            $error = "El email no existe en la base de datos";
        } else {
            if ($password === $usuario->getPassword()) {
                session_start();
                $_SESSION["nombre"] = $usuario->getNombre();
                $_SESSION["rol"] = $usuario->getRol();

                if ($usuario->getRol() === "admin") {
                    header("Location: indexadmin.php");
                }
                if ($usuario->getRol() === "usuario") {
                    header("Location: index.php");
                }
            } else {
                $error = "las contraseñas no coinciden";
            };
        }
    }
}

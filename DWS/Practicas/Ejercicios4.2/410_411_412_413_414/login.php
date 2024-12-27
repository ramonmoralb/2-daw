<?php
include_once("../libreria/libreria.php");

$usuarios = [["usuario", "usuario"]];


if (isset($_POST["entrar"])) {
    if (isset($_POST["usuario"]) && isset($_POST["password"])) {
        $usuario = $_POST["usuario"];
        $password = $_POST["password"];

        if (validarUsuario($usuarios, $usuario, $password)) {
            session_start();
            $_SESSION["usuario"] = $usuario;
            include("./peliculas.php");
        } else {
            $error = "Usuario o password incorrectos";
            $_POST["error"] = $error;
            include("./index.php");
        }
    } else {
        $error = "No puedes entrar sin iniciar sesión";
        $_POST["error"] = $error;
        include("./index.php");
    }
} else {
    // maneja la entrada directa por url, devuelve al index.
    include("./index.php");
}

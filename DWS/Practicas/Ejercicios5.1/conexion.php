<?php

$usuario = "root";
$contrasena = "";
$baseDeDatos = "accesodatos";
$host = "localhost";


try {
    $conexion = new PDO("mysql:host=$host;dbname=$baseDeDatos", $usuario, $contrasena);
    //  echo "Conexión establecida.";
} catch (PDOException $e) {
    echo $e->getMessage();
};

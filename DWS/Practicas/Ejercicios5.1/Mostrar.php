<?php


function getAllAlumnos()
{
    include "conexion.php";

    $tabla = "alumnos";
    $query = "SELECT * FROM $tabla";
    try {
        $stmt = $conexion->prepare($query);
        $stmt->execute();
        $alumnos = $stmt->fetchAll();
        return $alumnos;
    } catch (PDOException $e) {
        echo $e->getMessage();
        return null;
    }
}

$alumnos = getAllAlumnos();

function mostrar($alumnos)
{
    if ($alumnos !== null) {
        if (count($alumnos) > 0) {
            echo "Alumnos: <br>";
            foreach ($alumnos as $alumno) {
                echo "NIA: " . $alumno["NIA"] . "  NOMBRE: " . $alumno["NOMBRE"] . "   APELLIDO: " . $alumno["APELLIDO"] . "   NOTA: " . $alumno["NOTA"] . "<br>";
            }
            echo "<br>";
        } else {
            echo "La lista de alumnos está vacia";
        }
    } else {
        echo "No se han podido recuperar los alumnos de la base de datos";
    }
}

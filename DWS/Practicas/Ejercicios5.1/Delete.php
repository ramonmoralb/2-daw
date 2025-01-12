<?php

function deleteAlumno($nia)
{
    include "./conexion.php";
    if (comprobarNia($nia)) {
        $tabla = "alumnos";
        $query = "DELETE  FROM $tabla WHERE NIA=:NIA";
        try {
            $stmt = $conexion->prepare($query);
            $values = array(":NIA" => $nia);
            $stmt->execute($values);
            echo "Alumno eliminado de la base de datos.<br>";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    } else {
        echo "No existe ningún alumno con ese nia en la base de datos.<br>";
    }
}

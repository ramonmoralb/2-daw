<?php
function updateNotaAlumno($alumno, $nuevaNota)
{
    include("./conexion.php");
    if (comprobarNia($alumno->getNia())) {

        $tabla = "alumnos";
        $query = "UPDATE $tabla SET NOTA = :NUEVANOTA WHERE NIA = :NIA";

        try {
            $stmt = $conexion->prepare($query);
            $values = array(":NUEVANOTA" => $nuevaNota, ":NIA" => $alumno->getNia());
            $stmt->execute($values);
            $nombre = $alumno->getNombre();
            echo "Nota del alumno  $nombre  modificada $nuevaNota.<br>";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    } else {
        echo "No existe ningún alumno con ese nia en la base de datos.<br>";
    }
}

<?php
include_once("./alumnos.php");
include_once("./Mostrar.php");
include_once("./Delete.php");
include_once("./Update.php");

$alumonEjer3 = new Alumno(77777777, "Paco ", "Ejer3", "3");
$alumonRodolofoLangostino = new Alumno(111111, "Rodolfo ", "Langostino", "4");

function comprobarNia($nia)
{
    include "./conexion.php";
    $tabla = "alumnos";
    $query = "SELECT * FROM $tabla WHERE NIA=:NIA";
    try {
        $stmt = $conexion->prepare($query);
        $values = array(":NIA" => $nia);
        $stmt->execute($values);
        $resultado = $stmt->fetchAll();
        return count($resultado) > 0;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}

function insertAlumno($alumno)
{
    include "./conexion.php";
    if (!comprobarNia($alumno->getNia())) {
        $tabla = "alumnos";
        $query = "INSERT INTO $tabla (NIA, NOMBRE, APELLIDO, NOTA) VALUES (:NIA, :NOMBRE, :APELLIDO, :NOTA)";
        try {
            $stmt = $conexion->prepare($query);
            $values = array(":NIA" => $alumno->getNia(), ":NOMBRE" => $alumno->getNombre(), ":APELLIDO" => $alumno->getApellido(), ":NOTA" => $alumno->getNota());
            $stmt->execute($values);
            echo "Alumno añadido<br>";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    } else {
        echo "El nia ya existe en la base de datos<br>";
    }
}



echo "Inserción de Alumnos: <br>";
insertAlumno($alumonEjer3);
insertAlumno($alumonRodolofoLangostino);
echo  "<hr>";

echo "Lista de Alumnos: <br>";
$alumnos1 = getAllAlumnos();
mostrar($alumnos1);
echo  "<hr>";

echo "Eliminar alumnos: <br>";
//deleteAlumno($alumonRodolofoLangostino->getNia()); // si descomentas ves la modificación de Rodolfo.
deleteAlumno(2);
$alumnos2 = getAllAlumnos();
mostrar($alumnos2);
echo  "<hr>";

echo "Modificar alumnos: <br>";
updateNotaAlumno($alumonRodolofoLangostino, 5.5);
updateNotaAlumno($alumonEjer3, 9);
updateNotaAlumno($alumonEjer3, 9);
$alumnos3 = getAllAlumnos();
mostrar($alumnos3);
echo  "<hr>";

deleteAlumno($alumonEjer3->getNia());
deleteAlumno($alumonRodolofoLangostino->getNia());

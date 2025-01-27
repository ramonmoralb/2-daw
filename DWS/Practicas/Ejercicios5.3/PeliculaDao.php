<?php
include_once("./Pelicula.php");

class PeliculaDao
{
    private string $host;
    private string $user;
    private string $password;
    private string $dataBase;
    private PDO $conn;



    public function __construct($host, $user, $password, $dataBase)
    {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->dataBase = $dataBase;
        try {
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dataBase", $this->user, $this->password);
            //  echo "conectado";
        } catch (PDOException $e) {
            echo $e->getMessage();
        };
    }
    public function obtenerPeliculas()
    {
        $query = "SELECT * FROM soportes";
        $peliculas = [];

        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $resultados = $stmt->fetchAll();

            foreach ($resultados as $fila) {
                $pelicula = new Pelicula(
                    $fila['Titulo'],
                    $fila['Tipo'],
                    $fila['Genero'],
                    $fila['Director'],
                    $fila['Anio']
                );
                $pelicula->setId($fila['Id']);
                array_push($peliculas, $pelicula);
            }
        } catch (PDOException $e) {
            echo "Error al obtener las películas: " . $e->getMessage();
        }

        return $peliculas;
    }


    public function insertPelicula(Pelicula $pelicula)
    {
        try {
            $query = "INSERT INTO soportes ( Tipo,  Titulo,  Director, Genero, Anio) 
                      VALUES ( :TIPO,  :TITULO,  :DIRECTOR, :GENERO, :ANIO)";
            $values = [

                ":TIPO" => $pelicula->getTipo(),
                ":TITULO" => $pelicula->getTitulo(),
                ":DIRECTOR" => $pelicula->getDirector(),
                ":GENERO" => $pelicula->getGenero(),
                ":ANIO" => $pelicula->getAnio()
            ];

            $stmt = $this->conn->prepare($query);
            $stmt->execute($values);

            echo "Pelicula añadida en la base de datos.<br>";
        } catch (PDOException $e) {
            echo "Error al insertar la película: " . $e->getMessage();
        }
    }


    public function actualizarPelicula(Pelicula $pelicula)
    {
        $query = "UPDATE soportes SET Tipo = :TIPO, Titulo = :TITULO, Director = :DIRECTOR, Genero = :GENERO, Anio = :ANIO WHERE Id = :ID";
        try {
            $values = array(
                ":TIPO" => $pelicula->getTipo(),
                ":TITULO" => $pelicula->getTitulo(),
                ":DIRECTOR" => $pelicula->getDirector(),
                ":GENERO" => $pelicula->getGenero(),
                ":ANIO" => $pelicula->getAnio(),
                ":ID" => $pelicula->getId()
            );
            $stmt = $this->conn->prepare($query);
            $stmt->execute($values);
        } catch (PDOException $e) {
            echo $e;
        }
    }

    public function eliminarPelicula($id)
    {
        $query = "DELETE FROM soportes WHERE Id = :ID";

        try {
            $values = array(":ID" => $id);
            $stmt = $this->conn->prepare($query);
            $stmt->execute($values);
        } catch (PDOException $e) {
            echo $e;
        }
    }
    public function obtenerPeliculaPorId($id)
    {
        $query = "SELECT * FROM soportes WHERE Id = :ID";
        try {
            $stmt = $this->conn->prepare($query);
            $values = array(":ID" => $id);
            $stmt->execute($values);

            $fila = $stmt->fetch();
            if ($fila) {
                $pelicula = new Pelicula(
                    $fila['Titulo'],
                    $fila['Tipo'],
                    $fila['Genero'],
                    $fila['Director'],
                    $fila['Anio']
                );
                $pelicula->setId($fila['Id']);
                return $pelicula;
            } else {
                return null;
            }
        } catch (PDOException $e) {
            echo "Error al obtener la película: " . $e->getMessage();
            return null;
        }
    }
}

<?php
include_once("./Usuario.php");

class UsuarioDao
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

    public function obetenerUsuarios()
    {
        $query = "SELECT * FROM usuarios";

        $usuarios = [];
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $resultados = $stmt->fetchAll();

            foreach ($resultados as $fila) {
                $usuario = new Usuario(
                    $fila["nombre"],
                    $fila["email"],
                    $fila["password"],
                    $fila["rol"]
                );

                array_push($usuarios, $usuario);
            }
        } catch (PDOException $e) {
            echo "Error al obtener las películas: " . $e->getMessage();
        }
        return $usuarios;
    }


    public function registrarUsuario(Usuario $usuario)
    {
        $query = "INSERT INTO usuarios (nombre, email, password, rol) VALUES (:NOMBRE, :EMAIL, :PASSWORD, :ROL)";

        try {
            $stmt = $this->conn->prepare($query);
            $values = [
                ":NOMBRE" => $usuario->getNombre(),
                ":EMAIL" => $usuario->getEmail(),
                ":PASSWORD" => $usuario->getPassword(),
                ":ROL" => $usuario->getRol()
            ];
            $stmt->execute($values);
        } catch (PDOException $e) {
            echo "Error al obtener las películas: " . $e->getMessage();
        }
    }

    public function obetenerUsuarioPorEmail($email)
    {
        $query = "SELECT * FROM usuarios WHERE email = :EMAIL";
        $usuario = null;
        try {

            $stmt = $this->conn->prepare($query);
            $values = [
                ":EMAIL" => $email
            ];
            $stmt->execute($values);
            $resultados = $stmt->fetchAll();
            if (count($resultados) > 0) {
                foreach ($resultados as $fila) {
                    $usuario = new Usuario(
                        $fila["nombre"],
                        $fila["email"],
                        $fila["password"],
                        $fila["rol"]
                    );
                }
            }
            return $usuario;
        } catch (PDOException $e) {
            echo "Error al obtener las películas: " . $e->getMessage();
        }
    }
}

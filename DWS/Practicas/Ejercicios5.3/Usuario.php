<?php
class Usuario
{
    private int $id;
    private string $nombre;
    private string $email;
    private string $password;
    private string $rol;

    public function __construct($nombre, $email, $password, $rol = "usuario")
    {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->password = $password;
        $this->setRol($rol);
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }


    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }


    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }


    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }


    public function getRol(): string
    {
        return $this->rol;
    }

    public function setRol(string $rol): void
    {

        if (!in_array($rol, ['usuario', 'admin'])) {
            throw new Error("El usuario, solo puede ser admin o ususario");
        }
        $this->rol = $rol;
    }
}

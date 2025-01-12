<?php

class Alumno
{
    private $nia;
    private $nombre;
    private $apellido;
    private $nota;


    public function __construct($nia, $nombre, $apellido, $nota)
    {
        $this->nia = $nia;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->nota = $nota;
    }


    public function getNia()
    {
        return $this->nia;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getApellido()
    {
        return $this->apellido;
    }

    public function getNota()
    {
        return $this->nota;
    }


    public function setNia($nia)
    {
        $this->nia = $nia;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }
}

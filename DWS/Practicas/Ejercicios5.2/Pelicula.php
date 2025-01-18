<?php
class Pelicula
{
    private $id;
    private $titulo;
    private $tipo;
    private $genero;
    private $director;
    private $anio;

    public function __construct($titulo, $tipo, $genero, $director, $anio)
    {
        $this->titulo = $titulo;
        $this->tipo = $tipo;
        $this->genero = $genero;
        $this->director = $director;
        $this->anio = $anio;
    }


    public function getId()
    {
        return $this->id;
    }
    public function setId($id)
    {
        $this->id = $id;
    }

    public function getTipo()
    {
        return $this->tipo;
    }
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    public function getTitulo()
    {
        return $this->titulo;
    }
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;
    }

    public function getDirector()
    {
        return $this->director;
    }
    public function setDirector($director)
    {
        $this->director = $director;
    }

    public function getGenero()
    {
        return $this->genero;
    }
    public function setGenero($genero)
    {
        $this->genero = $genero;
    }

    public function getAnio()
    {
        return $this->anio;
    }
    public function setAnio($anio)
    {
        $this->anio = $anio;
    }
}

<?php
include "Soporte.php";

$soporte1 = new Soporte("Tenet", 22, 3);
echo "<strong>" . $soporte1->titulo . "</strong>";
echo "<br>Precio: " . $soporte1->getPrecio() . " euros";
echo "<br>Precio IVA incluido: " . $soporte1->getPrecioConIva() . " euros";
echo "<br>";
$soporte1->muestraResumen();

echo "<hr>";
echo "<h3>Clase cinta de video</h3>";
include "CintaVideo.php";


$miCinta = new CintaVideo("Los cazafantasmas", 23, 3, 107);
echo "<strong>" . $miCinta->titulo . "</strong>";
echo "<br>Precio: " . $miCinta->getPrecio() . " euros";
echo "<br>Precio IVA incluido: " . $miCinta->getPrecioConIva() . " euros";
echo "<br>";
$miCinta->muestraResumen();


echo "<hr>";
echo "<h3>Clase DVD</h3>";

include "Dvd.php";

$miDvd = new Dvd("Origen", 24, 15, "es,en,fr", "16:9"); 
echo "<strong>" . $miDvd->titulo . "</strong>"; 
echo "<br>Precio: " . $miDvd->getPrecio() . " euros"; 
echo "<br>Precio IVA incluido: " . $miDvd->getPrecioConIva()  . " euros";
$miDvd->muestraResumen();


echo "<hr>";
echo "<h3>Clase Juego</h3>";

include "Juego.php";

$miJuego = new Juego("The Last of Us Part II", 26, 49.99, "PS4", 1, 7); 
echo "<strong>" . $miJuego->titulo . "</strong>"; 
echo "<br>Precio: " . $miJuego->getPrecio() . " euros"; 
echo "<br>Precio IVA incluido: " . $miJuego->getPrecioConIva() . " euros";
$miJuego->muestraResumen();
?>



<?php
session_start();

unset($_SESSION["visitas"]);
session_destroy();
header("Location: ./visitas.php");
//header("Refresh: 3; ./visitas.php");
//echo "reiniciando.... 3 2 1 ";

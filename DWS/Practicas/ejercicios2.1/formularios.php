<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios de Operaciones</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Formularios de Operaciones</h1>
<div class="contenedor-formularios">

<div class="formulario">
<h2>Ejercicio 1: Operaciones números:</h2>
<form method="POST">
    <label for="num1">Primer número: </label>
    <input type="text" name="num1" require>
    <label for="num2">Segundo número: </label>
    <input type="text" name="num2" require>
   <button type="submit" name="operaciones-numeros">Operar</button>
</form>
<?php
if (isset($_POST['operaciones-numeros'])) {// si recibe ejecuta 
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $devolucion;
    if (is_numeric($num1) && is_numeric($num2)) {
        $resultadoSuma = ($num1 + $num2);
        $resultadoResta =($num1 - $num2);
        $resultadoMultiplicacion = ($num1 * $num2);
        if ($num2 != 0) {
            $resultadoDivision = ($num1 / $num2);
        } else {
            $resultadoDivision = "No se puede dividir por 0";
        }
        $devolucion= "  
        <div class='resultado'>  
            <p>Resultado suma: $resultadoSuma</p> 
            <p>Resultado resta: $resultadoResta</p> 
            <p>Resultado multiplicación: $resultadoMultiplicacion</p> 
            <p>Resultado division: $resultadoDivision</p> 
        </div>               
        ";
    } else {
       $devolucion ="<div><h2>Introduce valores numéricos</h2></div>" ; 
    }
    echo $devolucion;
}
?>
</div>

<div class="formulario">
<h2>Ejercicio 2: Tabla de multiplicar</h2>
<form method="POST">
    <label for="num1">Número a multiplicar:</label>
    <input type="text" name="num1" require>
   <button type="submit" name="tabla">Mostrar tabla</button>
</form>
<?php 
if(isset($_POST['tabla'])){
    if(is_numeric($_POST['num1'])){
        $num = $_POST['num1'];
        echo "<div class='resultado'>";
        for($i=1; $i<11;$i++){
            echo "<p>  $num  *  $i  =" . ($num*$i) . "</p>";
        }       
        echo "</div>";
    }else{
       echo 
       " <div>
        <p>No se ha introducido un valor númerico</p>
        </div>
        ";
    }
}
?>
</div>



<div class="formulario">
<h2>Ejercicio 3: Par o Impar</h2>
<form method="POST">
    <label for="num1">Número a comprobar:</label>
    <input type="text" name="num1" require>
   <button type="submit" name="parImpar">Comprobar</button>
</form>
<?php 
if(isset($_POST['parImpar'])){
    if(is_numeric($_POST['num1'])){
        $num = $_POST['num1'];
        echo "<div class='resultado'>";
        echo "<p>El número $num " . (($num % 2 === 0) ? "es par" : "es impar") . ".</p>";
        echo "</div>";
    } else {
        echo "<div><p>No se ha introducido un valor numérico.</p></div>";
    }
}
?>
</div>
<div class="formulario">
<h2>Ejercicio 3: Edad y categoría</h2>
<form method="POST">
    <label for="num1">Edad:</label>
    <input type="text" name="num1" require>
   <button type="submit" name="categoria">Categoria</button>
</form>
<?php 
if(isset($_POST['categoria'])){
    if(is_numeric($_POST['num1'])){
        $num = $_POST['num1'];
        if($num>0 && $num<=14){
            echo "<div class='resultado'>";
            echo "<p>Es un niño.</p>";
            echo "</div>";
        }else if($num>14&&$num<22){
            echo "<div class='resultado'>";
            echo "<p>Es un adolescente.</p>";
            echo "</div>";
        }else{
            echo "<div class='resultado'>";
            echo "<p>Es un adulto.</p>";
            echo "</div>";
        }
    } else {
        echo "<div><p>No se ha introducido un valor numérico.</p></div>";
    }
}
?>
</div>
<div class="formulario">
            <h2>Ejercicio 5: Calculadora Simple</h2>
            <form method="POST">
                <label for="num1">Primer número:</label>
                <input type="text" name="num1" required>

                <label for="num2">Segundo número:</label>
                <input type="text" name="num2" required>

                <label for="operacion">Seleccione una operación:</label>
                <select name="operacion" required>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="multiplicacion">Multiplicación</option>
                    <option value="division">División</option>
                </select>

                <button type="submit" name="calcular">Calcular</button>
            </form>
            <?php
            if (isset($_POST['calcular'])) {
                $num1 = $_POST['num1'];
                $num2 = $_POST['num2'];
                $operacion = $_POST['operacion'];
                
                if (is_numeric($num1) && is_numeric($num2)) {
                    switch ($operacion) {
                        case 'suma':
                            $resultado = $num1 + $num2;
                            echo "<div class='resultado'><p>Resultado de la suma: $resultado</p></div>";
                            break;
                        case 'resta':
                            $resultado = $num1 - $num2;
                            echo "<div class='resultado'><p>Resultado de la resta: $resultado</p></div>";
                            break;
                        case 'multiplicacion':
                            $resultado = $num1 * $num2;
                            echo "<div class='resultado'><p>Resultado de la multiplicación: $resultado</p></div>";
                            break;
                        case 'division':
                            if ($num2 != 0) {
                                $resultado = $num1 / $num2;
                                echo "<div class='resultado'><p>Resultado de la división: $resultado</p></div>";
                            } else {
                                echo "<div class='resultado'><p>No se puede dividir por 0.</p></div>";
                            }
                            break;
                        default:
                            echo "<div class='resultado'><p>Operación no válida.</p></div>";
                    }
                } else {
                    echo "<div class='resultado'><p>Por favor, introduce valores numéricos válidos.</p></div>";
                }
            }
            ?>
        </div>
    </div>
</body>
</html>

<?php
function validarUsuario($usuarios, $usuario, $password)
{
    for ($i = 0; $i < count($usuarios); $i++) {
        if ($usuarios[$i][0] === $usuario && $usuarios[$i][1] === $password) {
            return true;
        }
    }
    return false;
}

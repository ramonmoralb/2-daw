"use strict";
import { addContacto, buscarContacto } from "./formulariosLogica.js";
import { mostarLista } from "../libreria/funciones.js";




document.addEventListener("DOMContentLoaded", async () => {
    const btnAnadir = document.getElementById("boton-anadir");
    btnAnadir.addEventListener("click", addContacto);
    const btnBuscar = document.getElementById("boton-buscar");
    btnBuscar.addEventListener("click", buscarContacto);
    const btnListar = document.getElementById("boton-listar");
    btnListar.addEventListener("click", mostarLista);
});
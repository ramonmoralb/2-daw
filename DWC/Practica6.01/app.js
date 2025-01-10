import { validarForm, anadirLocalStore, borrarAgenda, listar, borrarContacto } from "./funciones/funciones.js";
document.addEventListener("DOMContentLoaded", () => {
    const anadirBoton = document.getElementById("boton-anadir");
    const botonBorrarAgenda = document.getElementById("boton-borrar-agenda");
    const botonListar = document.getElementById("boton-listar");
    const botonesBorrarEntrada = document.querySelectorAll("boton-borrar-entrada");
    botonesBorrarEntrada.forEach(boton =>
        boton.addEventListener("click", (e) => { borrarContacto(e) })
    )

    botonListar.addEventListener("click", listar)
    botonBorrarAgenda.onclick = borrarAgenda;
    const form = document.getElementById("formulario-anadir");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apellidos = e.target.apellidos.value;
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value;
        if (validarForm(nombre, apellidos, direccion, telefono)) {
            e.target.nombre.value = "";
            e.target.apellidos.value = "";
            e.target.direccion.value = "";
            e.target.telefono.value = "";
            const contacto = { nombre, apellidos, direccion, telefono };
            anadirLocalStore(contacto)
        }
    })
    const isForm = () => {
        form.classList.contains("visible") ? form.classList.remove("visible") : form.classList.add("visible");
    }
    anadirBoton.addEventListener("click", isForm);
})
import { validarForm, anadirLocalStore, listar, borrarContacto, buscarContacto, mostrarContacto, isForm } from "./funciones/funciones.js";
document.addEventListener("DOMContentLoaded", () => {

    const anadirBoton = document.getElementById("boton-anadir");
    const botonListar = document.getElementById("boton-listar");
    const botonBuscar = document.getElementById("boton-buscar");
    const botonesBorrarEntrada = document.querySelectorAll("boton-borrar-entrada");
    const form = document.getElementById("formulario-anadir");
    const formBuscar = document.getElementById("formulario-buscar");
    const formEditar = document.getElementById("formulario-editar");


    botonesBorrarEntrada.forEach(boton =>
        boton.addEventListener("click", (e) => { borrarContacto(e) })
    );

    botonListar.addEventListener("click", listar)

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

    formBuscar.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const apellidos = e.target.apellidos.value;
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value;
        const contacto = { nombre, apellidos, direccion, telefono };
        buscarContacto(contacto, mostrarContacto);

        e.target.nombre.value = "";
        e.target.apellidos.value = "";
        e.target.direccion.value = "";
        e.target.telefono.value = "";
    })

    anadirBoton.addEventListener("click", () => {
        isForm(form)
        if (!formBuscar.classList.contains("visible")) {
            isForm(formBuscar);
        }
    });
    botonBuscar.addEventListener("click", () => {
        isForm(formBuscar)
        if (!form.classList.contains("visible")) {
            isForm(form);
        }
    });

})

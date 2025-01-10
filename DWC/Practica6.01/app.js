import { validarForm, anadirLocalStore, borrarAgenda, listar, borrarContacto, buscarContacto, mostrarContacto, editarContacto } from "./funciones/funciones.js";
document.addEventListener("DOMContentLoaded", () => {
    const anadirBoton = document.getElementById("boton-anadir");
    const botonBorrarAgenda = document.getElementById("boton-borrar-agenda");
    const botonListar = document.getElementById("boton-listar");
    const botonBuscar = document.getElementById("boton-buscar");
    const botonEditar = document.getElementById("boton-editar");
    const botonesBorrarEntrada = document.querySelectorAll("boton-borrar-entrada");
    botonesBorrarEntrada.forEach(boton =>
        boton.addEventListener("click", (e) => { borrarContacto(e) })
    )
    const isForm = (formulario) => {
        formulario.classList.contains("visible") ? formulario.classList.remove("visible") : formulario.classList.add("visible");
    }

    botonListar.addEventListener("click", listar)

    botonBorrarAgenda.onclick = borrarAgenda;
    const form = document.getElementById("formulario-anadir");
    const formBuscar = document.getElementById("formulario-buscar");
    const formEditar = document.getElementById("formulario-editar");

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


    anadirBoton.addEventListener("click", () => isForm(form));
    botonBuscar.addEventListener("click", () => isForm(formBuscar));


})

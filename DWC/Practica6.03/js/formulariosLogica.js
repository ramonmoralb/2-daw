import { validarForm } from "../validaciones/validaciones.js";
import { getAll, getContactoPorID } from "../libreria/funciones.js";
import { addContactoFb, updateContactoFb } from "../firebase/firebase.js";
import { formAnadir, formEditar, formBuscar } from "../constantes/formularios.js";
import { contactoToLi } from "../libreria/funciones.js";

const addContacto = () => {
    const containerForm = document.getElementById("container-form");
    containerForm.innerHTML = "";
    containerForm.innerHTML = formAnadir;
    const formulario = document.getElementById("formulario-anadir");
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        var nombre = formulario.elements["nombre"].value;
        var apellidos = formulario.elements["apellidos"].value;
        var direccion = formulario.elements["direccion"].value;
        var telefono = formulario.elements["telefono"].value;
        var id = formulario.elements["telefono"].value;

        if (!validarForm(nombre, apellidos, direccion, telefono)) return;
        const contacto = {
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            id: id
        }
        var anadir = await addContactoFb(contacto);
        if (!anadir) {
            alert("El teléfono del contacto, ya existe en la base de datos. No pueden haber dos contactos con el mismo teléfono");
            return;
        }
        formulario.elements["nombre"].value = "";
        formulario.elements["apellidos"].value = "";
        formulario.elements["direccion"].value = "";
        formulario.elements["telefono"].value = "";
    });
}


const updateContacto = async (idA) => {
    const containerForm = document.getElementById("container-form");
    containerForm.innerHTML = "";
    containerForm.innerHTML = formEditar;

    const formulario = document.getElementById("formulario-editar");
    const contactoRecuperado = await getContactoPorID(idA);

    if (!contactoRecuperado) {
        console.error("No se encontró el contacto con el ID:", idA);
        return;
    }

    // Prellenar el formulario con los datos actuales del contacto
    formulario.elements["nombre"].value = contactoRecuperado.nombre;
    formulario.elements["apellidos"].value = contactoRecuperado.apellidos;
    formulario.elements["direccion"].value = contactoRecuperado.direccion;
    formulario.elements["telefono"].value = contactoRecuperado.telefono;

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nombre = formulario.elements["nombre"].value.trim();
        const apellidos = formulario.elements["apellidos"].value.trim();
        const direccion = formulario.elements["direccion"].value.trim();
        const telefono = formulario.elements["telefono"].value.trim();
        const id = telefono;

        if (!validarForm(nombre, apellidos, direccion, telefono)) {
            console.error("Formulario no válido.");
            return;
        }

        const contactoActualizado = { nombre, apellidos, direccion, telefono, id };
        const exito = await updateContactoFb(contactoActualizado, idA);

        if (exito) {
            console.log("Contacto actualizado con éxito.");
            formulario.elements["nombre"].value = "";
            formulario.elements["apellidos"].value = "";
            formulario.elements["direccion"].value = "";
            formulario.elements["telefono"].value = "";
        } else {
            console.error("No se pudo actualizar el contacto.");
        }
    });
};

const buscarContacto = () => {


    const containerForm = document.getElementById("container-form");
    containerForm.innerHTML = "";
    containerForm.innerHTML = formBuscar;
    const formulario = document.getElementById("formulario-buscar");
    const listaAside = document.getElementById("lista-aside-filtrados")
    const ocultarLista = document.createElement("button");
    ocultarLista.innerText = "Dejar de ver"
    listaAside.innerHTML = "";


    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        var nombre = formulario.elements["nombre"].value;
        var apellidos = formulario.elements["apellidos"].value;
        var direccion = formulario.elements["direccion"].value;
        var telefono = formulario.elements["telefono"].value;
        var id = formulario.elements["telefono"].value;
        const h2 = document.createElement("h2");
        h2.innerHTML = "Resultados busqueda:";
        listaAside.appendChild(h2);
        const contactosAgenda = await getAll();
        if (contactosAgenda !== null && contactosAgenda.length > 0) {
            const resultado = contactosAgenda.filter((contacto) => contacto.nombre === nombre || contacto.apellidos === apellidos || contacto.direccion === direccion || contacto.telefono == telefono);
            console.log(resultado.length);


            if (resultado.length >= 1) {
                resultado.forEach((contacto) => {
                    contactoToLi(contacto, listaAside)
                })
            }
            else {
                const li = document.createElement("li");
                li.innerHTML = "No hay coincidencias";
                listaAside.appendChild(li);
            }
            ocultarLista.onclick = (e) => {
                const lis = e.target.parentElement.querySelectorAll("li");
                lis.forEach(li => li.remove())
                e.target.remove();
                h2.remove();
            };
            listaAside.appendChild(ocultarLista);
            formulario.elements["nombre"].value = "";
            formulario.elements["apellidos"].value = "";
            formulario.elements["direccion"].value = "";
            formulario.elements["telefono"].value = "";
        }
    });
}


export { addContacto, updateContacto, buscarContacto }
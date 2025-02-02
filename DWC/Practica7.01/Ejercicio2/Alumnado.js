import { Modulo } from './Modulo.js';

export class Alumnado {
    constructor(dni, nombre, apellidos, fechaNacimiento, notaMedia, modulos) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.notaMedia = notaMedia;
        this.modulos = modulos;
    }

    // Getter y setter para la nota media
    get notaMedia() {
        return this._notaMedia;
    }

    set notaMedia(nota) {
        if (nota >= 0 && nota <= 10) {
            this._notaMedia = nota;
        } else {
            throw new Error("La nota media debe estar entre 0 y 10.");
        }
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad() {
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        return edad >= 18;
    }
}
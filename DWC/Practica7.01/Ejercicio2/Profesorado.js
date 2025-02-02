export class Profesorado {
    constructor(dni, nombre, apellidos, especialidad) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.especialidad = especialidad;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }
}
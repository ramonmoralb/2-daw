import { Alumnado } from './Alumnado.js';

export class Curso {
    constructor(nombre, aula, modulos, alumnado) {
        this.nombre = nombre;
        this.aula = aula;
        this.modulos = modulos;
        this.alumnado = alumnado;
    }


    obtenerNotaMedia() {
        const total = this.alumnado.reduce((sum, alumno) => sum + alumno.notaMedia, 0);
        return total / this.alumnado.length;
    }


    mostrarProfesorado() {
        return this.modulos.map(modulo => {
            return `<p><strong>${modulo.nombre}</strong>: ${modulo.profesores.map(prof => prof.nombreCompleto).join(", ")}</p>`;
        }).join("");
    }


    matricularAlumnado(alumno) {
        if (alumno instanceof Alumnado) {
            this.alumnado.push(alumno);
        } else {
            throw new Error("El objeto no es una instancia de Alumnado.");
        }
    }

    listarAlumnado(orden = "asc") {
        return this.alumnado
            .sort((a, b) => orden === "asc" ? a.notaMedia - b.notaMedia : b.notaMedia - a.notaMedia)
            .map(alumno => `<p>${alumno.nombre} ${alumno.apellidos}: ${alumno.notaMedia}</p>`)
            .join("");
    }

    informeCompleto() {
        return `
            <h2>${this.nombre}</h2>
            <p>Aula: ${this.aula}</p>
            <h3>Profesorado:</h3>
            ${this.mostrarProfesorado()}
            <h3>Alumnado:</h3>
            ${this.listarAlumnado()}
            <h3>Nota Media del Curso:</h3>
            <p>${this.obtenerNotaMedia().toFixed(2)}</p>
        `;
    }
}
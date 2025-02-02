import { Curso } from './Curso.js';
import { Alumnado } from './Alumnado.js';
import { Modulo } from './Modulo.js';
import { Profesorado } from './Profesorado.js';

// profesores
const profesor1 = new Profesorado("12345678A", "Angel", "Pérez", "LEMA");
const profesor2 = new Profesorado("87654321B", "Ana", "Gómez", "Programación");
const profesor3 = new Profesorado("11223344C", "Luis", "Martínez", "Bases de Datos");
const profesor4 = new Profesorado("44332211D", "Sofía", "Ruiz", "Diseño Web");

// modulos
const modulo1 = new Modulo("Lema", 100, [profesor1]);
const modulo2 = new Modulo("Programación", 150, [profesor2]);
const modulo3 = new Modulo("Bases de Datos", 120, [profesor3]);
const modulo4 = new Modulo("Diseño Web", 90, [profesor4]);

//  alumnos
const alumno1 = new Alumnado("11111111A", "Carlos", "López", "2000-01-01", 8.5, [modulo1]);
const alumno2 = new Alumnado("22222222B", "María", "García", "2005-06-15", 7.0, [modulo2]);
const alumno3 = new Alumnado("33333333C", "Pedro", "Sánchez", "2002-03-20", 9.0, [modulo3]);
const alumno4 = new Alumnado("44444444D", "Laura", "Fernández", "2004-07-10", 6.5, [modulo4]);

//  cursos
const curso1 = new Curso("Desarrollo Web", 101, [modulo1, modulo2], [alumno1, alumno2]);
const curso2 = new Curso("Bases de Datos y Diseño", 102, [modulo3, modulo4], [alumno3, alumno4]);

document.getElementById('curso-info').innerHTML = `
    <h2>Curso 1: Desarrollo Web</h2>
    ${curso1.informeCompleto()}
    <hr>
    <h2>Curso 2: Bases de Datos y Diseño</h2>
    ${curso2.informeCompleto()}
`;
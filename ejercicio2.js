'use strict';

// Definimos el array de asignaturas
let asignaturas = [
    { asignatura: 'Matematica computacional', nivel: 1 },
    { asignatura: 'Metodologías para resolver problemas informáticos', nivel: 1 },
    { asignatura: 'Base de datos relacionales', nivel: 1 },
    { asignatura: 'Las tics y soporte en hardware', nivel: 1 },
    { asignatura: 'Programación de interfaces gráficas y estructura de datos', nivel: 1 },
    { asignatura: 'Proyecto integrador de saberes: creación de aplicaciones de escritorio', nivel: 1 },
    { asignatura: 'Prácticas de servicio comunitario', nivel: 1 },
    { asignatura: 'Matematica computacional', nivel: 2 },
    { asignatura: 'Metodologías para resolver problemas informáticos', nivel: 2 },
    { asignatura: 'Base de datos relacionales', nivel: 2 },
    { asignatura: 'Las tics y soporte en hardware', nivel: 2 },
    { asignatura: 'Programación de interfaces gráficas y estructura de datos', nivel: 2 },
    { asignatura: 'Proyecto integrador de saberes: creación de aplicaciones de escritorio', nivel: 2 },
    { asignatura: 'Prácticas de servicio comunitario', nivel: 2 },
    { asignatura: 'Programacion de aplicaciones para dispositivos móviles', nivel: 3 },
    { asignatura: 'Probabilidades y procesos estocásticos', nivel: 3 },
    { asignatura: 'Herramientas informáticas para el despliegue de diagramas', nivel: 3 },
    { asignatura: 'Aplicaciones tecnológicas autónomas', nivel: 3 },
    { asignatura: 'Software aplicativo', nivel: 3 },
    { asignatura: 'Proyecto integrador de saberes: creación de aplicaciones web con base a la arquitectura cliente servidor', nivel: 3 },
    { asignatura: 'Prácticas laborales', nivel: 3 },
    { asignatura: 'Comunicaciones y redes de datos', nivel: 4 },
    { asignatura: 'Sistemas operativos', nivel: 4 },
    { asignatura: 'Herramientas case', nivel: 4 },
    { asignatura: 'Derecho y seguridad informática', nivel: 4 },
    { asignatura: 'Tendencias tecnológicas', nivel: 4 },
    { asignatura: 'Desarrollo de proyectos de software', nivel: 4 },
    { asignatura: 'Prácticas laborales', nivel: 4 }
];

// Definimos la función que recibe el array de asignaturas y el nivel
function filtrarAsignaturasPorNivel(asignaturas, nivel) {
    // Creamos un nuevo array para almacenar las asignaturas filtradas
    let asignaturasFiltradas = [];

    // Utilizamos el bucle for tradicional para recorrer el array de asignaturas
    for (let i = 0; i < asignaturas.length; i++) {
        // Verificamos si el nivel de la asignatura coincide con el nivel proporcionado
        if (asignaturas[i].nivel === nivel) {
            // Si coincide, agregamos la asignatura al array de asignaturas filtradas
            asignaturasFiltradas.push(asignaturas[i]);
        }
    }

    // Retornamos el array de asignaturas filtradas
    return asignaturasFiltradas;
}

// Ejemplo de uso de la función
let nivel = 2;
let asignaturasDelNivel = filtrarAsignaturasPorNivel(asignaturas, nivel);

alert(asignaturasDelNivel);

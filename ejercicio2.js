'use strict';


let asignaturas = [
    { asignatura: 'Matematica computacional', nivel: 1 },
    { asignatura: 'Metodologías para resolver problemas informáticos', nivel: 1 },
    { asignatura: 'Base de datos relacionales', nivel: 1 },
    { asignatura: 'Las tics y soporte en hardware', nivel: 1 },
    { asignatura: 'Programación de interfaces gráficas y estructura de datos', nivel: 1 },
    { asignatura: 'Proyecto integrador de saberes: creación de aplicaciones de escritorio', nivel: 1 },
    { asignatura: 'Prácticas de servicio comunitario', nivel: 1 },

    
    { asignatura: 'Sistemas digitales programables', nivel: 2 },
    { asignatura: 'Sistemas de información', nivel: 2 },
    { asignatura: 'Programación orientada a objetos', nivel: 2 },
    { asignatura: 'Procesos contables', nivel: 2 },
    { asignatura: 'Gestion de base de datos', nivel: 2 },
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

function Asignaturas(asignaturas, nivel) {
    let asignaturasFiltradas = [];

    for (let i = 0; i < asignaturas.length; i++) {
        if (asignaturas[i].nivel === nivel) {
            asignaturasFiltradas.push(asignaturas[i]);
        }
    }

    return asignaturasFiltradas;
}
let nivel = 2;
let asignaturasDelNivel = Asignaturas(asignaturas, nivel);
let mensaje = asignaturasDelNivel.map(a => `${a.asignatura} (Nivel ${a.nivel})`).join('\n');
alert(mensaje);
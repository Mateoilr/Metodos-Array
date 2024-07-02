'use strict';

//Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
//La función debe recibir el array y devolver únicamente la parte entera del promedio.


function calcularPromedio(calificaciones) {
    // Inicializar la suma en 0
    let suma = 0;
    
    // Recorrer todas las calificaciones y sumar sus valores
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    
    // Calcular el promedio
    let promedio = suma / calificaciones.length;
    
    // Devolver la parte entera del promedio
    return Math.floor(promedio);
}

// Ejemplo de uso
let calificaciones = [100, 60, 80, 92, 72];
alert(calcularPromedio(calificaciones));  // Output: 86
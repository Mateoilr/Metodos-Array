'use strict';

//Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
//La función debe recibir el array y devolver únicamente la parte entera del promedio.


function calcularPromedio(calificaciones) {
    
    let suma = 0;
    
    
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    
  
    let promedio = suma / calificaciones.length;
    
   
    return Math.floor(promedio);
}

let calificaciones = [100, 60, 80, 92, 72];
alert(calcularPromedio(calificaciones));  
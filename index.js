"use strict";
console.log('trabajando en ts yea');
//booleanos
let confirmacion = false;
if (confirmacion) {
    console.log('confirmado');
}
else {
    console.log('no confirmado');
}
//number
let numero1 = 12;
let numero2 = 12;
let variable = 1;
let variableActiva = true;
function ecuacion(valor1, valor2, variableActiva) {
    let situacion = '';
    if (variableActiva) {
        valor1 += variable;
        situacion = 'variable activa';
    }
    if (valor1 > valor2)
        console.log(`valor1 mejor${situacion}`);
    if (valor1 == valor2)
        console.log('valores iguales');
    if (valor1 < valor2)
        console.log('valor 2 mas grande');
}
ecuacion(numero1, numero2, variableActiva);
//arrays hay que tipear los arreglos para limitarlos
let arreglo = [1, 2, 3, 4, 5,];
let arreglo2 = ['a', 'b', 'c', 'd', 'f'];
arreglo[0];
let objeto = {
    nombre: 'nombre',
    edad: 99,
    coso: true,
};
objeto = {
    nombre: 'nombre2',
    edad: 912,
    coso: false,
};
console.log(objeto);
let objetoDos = {
    nombre: 'pepe',
    edad: 99,
    coso: true,
};
//a medida que se le sumen cosas hay que agregar los datos a la interface para que lo tome sino da error
function enviarData(objetoDos) {
    console.log(`el nombre es ${objetoDos.nombre} su edad es ${objetoDos.edad},y coso: ${objetoDos.coso}`);
}
enviarData(objetoDos);

console.log('trabajando en ts yea');
//booleanos
var confirmacion = false;
if (confirmacion) {
    console.log('confirmado');
}
else {
    console.log('no confirmado');
}
//number
var numero1 = 12;
var numero2 = 12;
var variable = 1;
var variableActiva = true;
function ecuacion(valor1, valor2, variableActiva) {
    var situacion = '';
    if (variableActiva) {
        valor1 += variable;
        situacion = 'variable activa';
    }
    if (valor1 > valor2)
        console.log("valor1 mejor".concat(situacion));
    if (valor1 == valor2)
        console.log('valores iguales');
    if (valor1 < valor2)
        console.log('valor 2 mas grande');
}
ecuacion(numero1, numero2, variableActiva);
//arrays hay que tipear los arreglos para limitarlos
var arreglo = [1, 2, 3, 4, 5,];
var arreglo2 = ['a', 'b', 'c', 'd', 'f'];
arreglo[0];
var objeto = {
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
var objetoDos = {
    nombre: 'pepe',
    edad: 99,
    coso: true,
};
//a medida que se le sumen cosas hay que agregar los datos a la interface para que lo tome sino da error
function enviarData(objetoDos) {
    console.log("el nombre es ".concat(objetoDos.nombre, " su edad es ").concat(objetoDos.edad, ",y coso: ").concat(objetoDos.coso));
}
enviarData(objetoDos);
//clases
var NombreDeLaClase = /** @class */ (function () {
    function NombreDeLaClase(valorInicial) {
        this.propiedad = valorInicial;
    }
    NombreDeLaClase.prototype.metodo = function () {
        console.log("Este es un método de la clase.");
    };
    return NombreDeLaClase;
}());
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre; // Asignamos valores al crear una instancia
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
// Crear una instancia de la clase
var persona1 = new Persona("Kevin", 25);
persona1.saludar(); // Output: Hola, mi nombre es Kevin y tengo 25 años.

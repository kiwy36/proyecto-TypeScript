var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Clase base que representa una cuenta bancaria genérica
var Cuenta = /** @class */ (function () {
    // Constructor: Inicializa los valores al crear una nueva instancia de la clase.
    // Se utiliza para asignar valores a las propiedades privadas/protegidas/públicas.
    function Cuenta(propietario, saldoInicial, tipoCuenta) {
        this.propietario = propietario; // Inicializa la propiedad protegida
        this.saldo = saldoInicial; // Inicializa la propiedad privada
        this.tipoCuenta = tipoCuenta; // Inicializa la propiedad pública
    }
    // Método público: Accesible desde cualquier lugar.
    // Permite obtener el saldo sin exponer directamente la propiedad privada.
    Cuenta.prototype.consultarSaldo = function () {
        return "El saldo de ".concat(this.propietario, " es $").concat(this.saldo);
    };
    // Método protegido: Solo accesible dentro de esta clase o desde clases derivadas.
    // Sirve para encapsular la lógica de modificación del saldo.
    Cuenta.prototype.ajustarSaldo = function (monto) {
        this.saldo += monto; // Modifica el saldo
    };
    // Método estático: Pertenece a la clase y no a las instancias.
    // Útil para funciones globales relacionadas con la clase.
    Cuenta.obtenerBanco = function () {
        return "El banco es ".concat(Cuenta.banco);
    };
    // Propiedad estática: Pertenece a la clase en sí y no a las instancias.
    // Sirve para datos compartidos entre todas las instancias de la clase.
    Cuenta.banco = "Banco Central";
    return Cuenta;
}());
// Clase derivada que representa una cuenta corriente.
// La palabra clave "extends" indica que esta clase hereda de la clase base "Cuenta".
// Esto permite reutilizar propiedades y métodos de la clase base.
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    // Constructor: Extiende el constructor de la clase base usando "super".
    // "super" se utiliza para llamar al constructor de la clase base y asegurarse
    // de que las propiedades de la clase base se inicialicen correctamente.
    function CuentaCorriente(propietario, saldoInicial, limite) {
        var _this = _super.call(this, propietario, saldoInicial, "Corriente") || this; // Llama al constructor de la clase base
        _this.limite = limite; // Inicializa la propiedad readonly
        return _this;
    }
    // Método público: Permite retirar dinero de la cuenta.
    // Valida que el monto no supere el límite permitido antes de ajustar el saldo.
    CuentaCorriente.prototype.retirar = function (monto) {
        if (monto > this.limite) {
            return "No puedes retirar m\u00E1s de $".concat(this.limite);
        }
        // Llama al método protegido de la clase base para modificar el saldo.
        this.ajustarSaldo(-monto);
        return "Has retirado $".concat(monto, ". ").concat(this.consultarSaldo());
    };
    return CuentaCorriente;
}(Cuenta));
// Clase derivada que representa una cuenta de ahorro.
// También utiliza "extends" para heredar de la clase base "Cuenta".
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    // Constructor: Llama al constructor de la clase base con "super"
    // y asigna el tipo de cuenta "Ahorro".
    function CuentaAhorro(propietario, saldoInicial) {
        return _super.call(this, propietario, saldoInicial, "Ahorro") || this; // Llama al constructor de la clase base
    }
    // Método público: Agrega intereses al saldo basado en una tasa.
    CuentaAhorro.prototype.agregarInteres = function (tasa) {
        var interes = this.saldoActual() * (tasa / 100); // Calcula el interés
        this.ajustarSaldo(interes); // Llama al método protegido para actualizar el saldo
        console.log("Se han agregado $".concat(interes.toFixed(2), " de intereses."));
    };
    // Método protegido: Devuelve el saldo actual.
    // Usa lógica interna para interpretar el saldo de la cuenta.
    CuentaAhorro.prototype.saldoActual = function () {
        return parseFloat(this.consultarSaldo().split("$")[1]); // Extrae el saldo como número
    };
    return CuentaAhorro;
}(Cuenta));
// ==================== Ejecución del código ====================
// Crea una instancia de CuentaCorriente
var cuenta1 = new CuentaCorriente("Kevin", 1000, 500);
console.log(cuenta1.consultarSaldo()); // Output: El saldo de Kevin es $1000
console.log(cuenta1.retirar(300)); // Output: Has retirado $300. El saldo de Kevin es $700
// console.log(cuenta1.saldo);        // Error: 'saldo' es privado
// cuenta1.limite = 600;             // Error: 'limite' es readonly
// Crea una instancia de CuentaAhorro
var cuenta2 = new CuentaAhorro("Ana", 2000);
cuenta2.agregarInteres(5); // Output: Se han agregado $100.00 de intereses.
console.log(cuenta2.consultarSaldo()); // Output: El saldo de Ana es $2100
// Uso del método estático
console.log(Cuenta.obtenerBanco()); // Output: El banco es Banco Central
//encapsulamiento y genericos
var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sortear = function () {
        return "para ".concat(this.nombre, " el ticket es ").concat(this.ticket);
    };
    return Sorteo;
}());
var sorteo = new Sorteo("pochoclos surtidos");
sorteo.setTicket("A7");
console.log(sorteo.sortear());

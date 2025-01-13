console.log('trabajando en ts yea')
//booleanos
let confirmacion: boolean = false
if(confirmacion){
    console.log('confirmado')
}else{
    console.log('no confirmado')
}
//number
let numero1: number = 12
let numero2: number = 12
let variable: number = 1
let variableActiva: boolean = true
function ecuacion (valor1: number,valor2: number,variableActiva:boolean):void{
    let situacion:string =''
    if(variableActiva){
        valor1+=variable;
        situacion='variable activa'
    }
    if(valor1>valor2)console.log(`valor1 mejor${situacion}`)
    if(valor1==valor2)console.log('valores iguales')
    if(valor1<valor2)console.log('valor 2 mas grande')
}

ecuacion(numero1,numero2,variableActiva)

//arrays hay que tipear los arreglos para limitarlos
let arreglo :number[]= [1,2,3,4,5,]
let arreglo2 : string[]= ['a','b','c','d','f']

arreglo[0]



//objetos el primero para definir que tipo de elementos se definiran dentro del objeto uno por uno
type Objecto ={
    nombre:string,
    edad:number,
    coso:boolean,
}
let objeto:Objecto ={
    nombre:'nombre',
    edad:99,
    coso:true,
}
objeto={
    nombre:'nombre2',
    edad:912,
    coso:false,
}
console.log(objeto)
//interdaces
interface ObjetoDos{
    nombre:string,
    edad:number,
    coso:boolean,
}
let objetoDos:ObjetoDos ={
    nombre:'pepe',
    edad:99,
    coso:true,
}
//a medida que se le sumen cosas hay que agregar los datos a la interface para que lo tome sino da error
function enviarData(objetoDos:ObjetoDos){
    console.log(`el nombre es ${objetoDos.nombre} su edad es ${objetoDos.edad},y coso: ${objetoDos.coso}`)
}
enviarData(objetoDos)
//clases
// Clase base que representa una cuenta bancaria genérica
class Cuenta {
    // Propiedad privada: Solo accesible dentro de esta clase.
    // Sirve para encapsular datos que no deben ser modificados directamente desde fuera.
    private saldo: number;

    // Propiedad protegida: Accesible dentro de esta clase y también desde clases derivadas.
    // Es útil para datos que las subclases necesitan manipular pero que deben estar ocultos desde fuera.
    protected propietario: string;

    // Propiedad pública: Accesible desde cualquier lugar.
    // Permite exponer datos que no necesitan restricciones de acceso.
    public tipoCuenta: string;

    // Propiedad estática: Pertenece a la clase en sí y no a las instancias.
    // Sirve para datos compartidos entre todas las instancias de la clase.
    static banco: string = "Banco Central";

    // Constructor: Inicializa los valores al crear una nueva instancia de la clase.
    // Se utiliza para asignar valores a las propiedades privadas/protegidas/públicas.
    constructor(propietario: string, saldoInicial: number, tipoCuenta: string) {
        this.propietario = propietario; // Inicializa la propiedad protegida
        this.saldo = saldoInicial;     // Inicializa la propiedad privada
        this.tipoCuenta = tipoCuenta;  // Inicializa la propiedad pública
    }

    // Método público: Accesible desde cualquier lugar.
    // Permite obtener el saldo sin exponer directamente la propiedad privada.
    public consultarSaldo(): string {
        return `El saldo de ${this.propietario} es $${this.saldo}`;
    }

    // Método protegido: Solo accesible dentro de esta clase o desde clases derivadas.
    // Sirve para encapsular la lógica de modificación del saldo.
    protected ajustarSaldo(monto: number): void {
        this.saldo += monto; // Modifica el saldo
    }

    // Método estático: Pertenece a la clase y no a las instancias.
    // Útil para funciones globales relacionadas con la clase.
    static obtenerBanco(): string {
        return `El banco es ${Cuenta.banco}`;
    }
}

// Clase derivada que representa una cuenta corriente.
// La palabra clave "extends" indica que esta clase hereda de la clase base "Cuenta".
// Esto permite reutilizar propiedades y métodos de la clase base.
class CuentaCorriente extends Cuenta {
    // Propiedad readonly: Solo se puede asignar una vez (en el constructor).
    // Es ideal para valores constantes o configuraciones.
    public readonly limite: number;

    // Constructor: Extiende el constructor de la clase base usando "super".
    // "super" se utiliza para llamar al constructor de la clase base y asegurarse
    // de que las propiedades de la clase base se inicialicen correctamente.
    constructor(propietario: string, saldoInicial: number, limite: number) {
        super(propietario, saldoInicial, "Corriente"); // Llama al constructor de la clase base
        this.limite = limite; // Inicializa la propiedad readonly
    }

    // Método público: Permite retirar dinero de la cuenta.
    // Valida que el monto no supere el límite permitido antes de ajustar el saldo.
    public retirar(monto: number): string {
        if (monto > this.limite) {
            return `No puedes retirar más de $${this.limite}`;
        }

        // Llama al método protegido de la clase base para modificar el saldo.
        this.ajustarSaldo(-monto);
        return `Has retirado $${monto}. ${this.consultarSaldo()}`;
    }
}

// Clase derivada que representa una cuenta de ahorro.
// También utiliza "extends" para heredar de la clase base "Cuenta".
class CuentaAhorro extends Cuenta {
    // Constructor: Llama al constructor de la clase base con "super"
    // y asigna el tipo de cuenta "Ahorro".
    constructor(propietario: string, saldoInicial: number) {
        super(propietario, saldoInicial, "Ahorro"); // Llama al constructor de la clase base
    }

    // Método público: Agrega intereses al saldo basado en una tasa.
    public agregarInteres(tasa: number): void {
        const interes = this.saldoActual() * (tasa / 100); // Calcula el interés
        this.ajustarSaldo(interes); // Llama al método protegido para actualizar el saldo
        console.log(`Se han agregado $${interes.toFixed(2)} de intereses.`);
    }

    // Método protegido: Devuelve el saldo actual.
    // Usa lógica interna para interpretar el saldo de la cuenta.
    protected saldoActual(): number {
        return parseFloat(this.consultarSaldo().split("$")[1]); // Extrae el saldo como número
    }
}

// ==================== Ejecución del código ====================

// Crea una instancia de CuentaCorriente
const cuenta1 = new CuentaCorriente("Kevin", 1000, 500);
console.log(cuenta1.consultarSaldo()); // Output: El saldo de Kevin es $1000
console.log(cuenta1.retirar(300));     // Output: Has retirado $300. El saldo de Kevin es $700
// console.log(cuenta1.saldo);        // Error: 'saldo' es privado
// cuenta1.limite = 600;             // Error: 'limite' es readonly

// Crea una instancia de CuentaAhorro
const cuenta2 = new CuentaAhorro("Ana", 2000);
cuenta2.agregarInteres(5);            // Output: Se han agregado $100.00 de intereses.
console.log(cuenta2.consultarSaldo()); // Output: El saldo de Ana es $2100

// Uso del método estático
console.log(Cuenta.obtenerBanco()); // Output: El banco es Banco Central
//encapsulamiento y genericos
class Sorteo<T> {
    private ticket?: T;
    constructor(private nombre: string) {}
    setTicket(ticket: T) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    public sortear(): string {
        return `para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo = new Sorteo<string>("pochoclos surtidos");
sorteo.setTicket("A7");
console.log(sorteo.sortear());


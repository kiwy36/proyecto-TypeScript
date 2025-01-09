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
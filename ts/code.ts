/*
    Instalacion de typescript
        npm i typescript -g
    Comprobar version TS
        tsc -v
*/

console.log("Hola mundo con TS sutano");

var nombre: string = "pepe";
var numero: number = 58;
var tieneHuevo: boolean = true;
var cualquiera:any = 45;

var arregloBoleanos:boolean[] = [true, false];
var arregloTextos: string[] = ["asdasd", "7474"];
var arregloVariado: any[] = [true, 2, "pepe"];


var datosEstructurados1: [string, string, number];
datosEstructurados1 = ["pepe", "yolo",7];

var datosEstructurados2: [string, string, number][];
datosEstructurados2 = [["pepe", "yolo", 7], ["toro", "polo", 4]];

//datos vacios
// var variableVacia: void
// var variableNula: null = null
// var variableIndefinida: undefined = undefined

// console.log(typeof(variableNula))

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/null

function saludo(nombrePersona:string) : string {
    return `Hola ${nombrePersona}`
}

function pruebaValor(numero1: string | number, numero2: string | number) : number {
    //condicional normal
    if(typeof(numero1) == 'string'){
        numero1 = parseInt(numero1);
    }
    //evaluacion ternaria
    numero2 = typeof(numero2) == 'string' ? parseInt(numero2) : numero2;

    return numero1+numero2;
}

console.log(pruebaValor("3", 5))


//POO TS - JS

class Usuario{
    public nombre: string
    protected correo: string
    private edad: number

    constructor(nombre: string, correo: string, edad: number){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
    }

    saludando(){
        return `Buenas noches ${this.nombre}`
    }

    edad_valida(minimoEdad: number){
        if(this.edad >= minimoEdad){
            return "puede entrar";
        }else{
            return "No puede entrar... larguese de aqui";
        }

        /*var validacion = (this.edad >= minimoEdad) ? "puede entrar" : "No puede entrar... larguese de aqui";
        return validacion*/
    }
}

var usuarioClase = new Usuario("Susan", "correosusan@email.com", 2);
console.log(usuarioClase.saludando())
console.log(usuarioClase.edad_valida(1))

//herencia

// class Carro extends Usuario


interface Ipersona{
    peso: number,
    altura: number,
    nombre: string,
    madre: string
}

function recibir_persona(data_persona:Ipersona){
    return `${data_persona.peso} - su altura corresponde con ${data_persona.altura}`
}

console.log(recibir_persona(
    {
        peso:78,
        altura: 180,
        nombre: "pepe molina",
        madre: "pepa perez"
    }
))
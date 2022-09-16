/*
    Instalacion de typescript
        npm i typescript -g
    Comprobar version TS
        tsc -v
*/
console.log("Hola mundo con TS sutano");
var nombre = "pepe";
var numero = 58;
var tieneHuevo = true;
var cualquiera = 45;
var arregloBoleanos = [true, false];
var arregloTextos = ["asdasd", "7474"];
var arregloVariado = [true, 2, "pepe"];
var datosEstructurados1;
datosEstructurados1 = ["pepe", "yolo", 7];
var datosEstructurados2;
datosEstructurados2 = [["pepe", "yolo", 7], ["toro", "polo", 4]];
//datos vacios
// var variableVacia: void
// var variableNula: null = null
// var variableIndefinida: undefined = undefined
// console.log(typeof(variableNula))
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/null
function saludo(nombrePersona) {
    return "Hola ".concat(nombrePersona);
}
function pruebaValor(numero1, numero2) {
    //condicional normal
    if (typeof (numero1) == 'string') {
        numero1 = parseInt(numero1);
    }
    //evaluacion ternaria
    numero2 = typeof (numero2) == 'string' ? parseInt(numero2) : numero2;
    return numero1 + numero2;
}
console.log(pruebaValor("3", 5));
//POO TS - JS
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }
    Usuario.prototype.saludando = function () {
        return "Buenas noches ".concat(this.nombre);
    };
    Usuario.prototype.edad_valida = function (minimoEdad) {
        if (this.edad >= minimoEdad) {
            return "puede entrar";
        }
        else {
            return "No puede entrar... larguese de aqui";
        }
        /*var validacion = (this.edad >= minimoEdad) ? "puede entrar" : "No puede entrar... larguese de aqui";
        return validacion*/
    };
    return Usuario;
}());
var usuarioClase = new Usuario("Susan", "correosusan@email.com", 2);
console.log(usuarioClase.saludando());
console.log(usuarioClase.edad_valida(1));
function recibir_persona(data_persona) {
    return "".concat(data_persona.peso, " - su altura corresponde con ").concat(data_persona.altura);
}
console.log(recibir_persona({
    peso: 78,
    altura: 180,
    nombre: "pepe molina",
    madre: "pepa perez"
}));

//variables para registrar al usuario
var nombre = document.getElementById('nombre')
var apellidos = document.getElementById('apellidos')
var tipoDocumento = document.getElementById('tipo-documento')
var numeroDocumento = document.getElementById('numero-documento')
var fecha = document.getElementById('fecha')
var numeroContacto = document.getElementById('numero-contacto')
var email = document. getElementById('email')
var cargo = document.getElementById('cargo')
var password = document.getElementById('password')
var verificarPassword = document.getElementById('verificarPassword')
var sede = document.getElementById('sede')
//boton que enviará los datos del usuario
var btnEnviar = document.getElementById('btn-enviar')
//clases para manejar los errores de las validaciones
var claseNombre = document.querySelector('.nombre')
var claseApellidos = document.querySelector('.apellidos')
var claseNumerodocumento = document.querySelector('.numero-documento')
var claseFecha = document.querySelector('.fecha')
var claseNumeroContacto = document.querySelector('.numero-contacto')
var claseEmail = document.querySelector('.email')
var clasePassword = document.querySelector('.password')
var claseVerificarPassword = document.querySelector('.verificarPassword')
var claseSede = document.querySelector('.sede')

function generarError(elemento, mensaje = ''){
    if( mensaje != '' ){
        elemento.lastElementChild.innerHTML = `<span class="text-danger"> ${mensaje} </span>`
    }else{
        elemento.lastElementChild.innerHTML = mensaje
    }    
}


function registrarUsuario(){
    //validacion del nombre
    if( nombre.value != '' ){
        generarError(claseNombre)
        console.log(nombre.value)
        //validacion de los apellidos
        if( apellidos.value != '' ){
            generarError(claseApellidos)
            console.log(apellidos.value)
            //tipo de documento
            if(tipoDocumento.options[0].value === ''){
                alert('selecciona un campo')
            }
        }else{
            generarError(claseApellidos, 'Error! los apellidos no pueden estar vacios')
        }
    }else{
        generarError(claseNombre, 'Error! el nombre no puede estar vacío')
    }
}
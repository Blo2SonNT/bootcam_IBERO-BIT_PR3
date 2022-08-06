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
var claseTipoDocumento = document.querySelector('.tipo-documento')
var claseCargo = document.querySelector('.cargo')
//variables expresiones regulares
var regExpNumeroDocumento = /^[0-9]/

var regExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

var regExpContraseña = /^[A-Za-z0-9]/
//fin de las variables

//funcion registrar usuario
function generarError(elemento, mensaje = ''){
    if( mensaje != '' ){
        elemento.lastElementChild.innerHTML = `<span class="text-danger existe_error"> ${mensaje} </span>`
    }else{
        elemento.lastElementChild.innerHTML = mensaje
    }
}

function registrarUsuario(){    
    var valido = false;
    //validacion del nombre    
    if( nombre.value != '' ){
        generarError(claseNombre)
        console.log(nombre.value)
    }else{
        generarError(claseNombre, 'Error! el nombre no puede estar vacío')
        console.error('campo vacio')
    }
    //validacion de los apellidos
    if( apellidos.value != '' ){
        generarError(claseApellidos)
        console.log(apellidos.value)
    }else{
        generarError(claseApellidos, 'Error! los apellidos no pueden estar vacios')
    }
    //validacion tipo de documento
    if(tipoDocumento.value === ''){
        generarError(claseTipoDocumento, 'Selecciona una opción!')
    }else if(tipoDocumento.value === 'cc' || tipoDocumento.value === 'ce' || tipoDocumento.value === 'pasaporte'){
        generarError(claseTipoDocumento)
        console.log(tipoDocumento.value)
    }
    //validacion input numero de documento
    // isNaN(numeroDocumento.value) || numeroDocumento.value == ''
    if( regExpNumeroDocumento.test(numeroDocumento.value) ){
        generarError(claseNumerodocumento)
        console.log(numeroDocumento.value)        
    }else{
        generarError(claseNumerodocumento, 'El numero de documento debe ser un número y no debe estar vacío')
    }

    //validacion de la fecha
    if( fecha.value != ''){
        console.log(fecha.value)
        generarError(claseFecha)
    }else{
        generarError(claseFecha, 'Error, la fecha no puede estar vacía')
    }

    //numero de contacto
    if( regExpNumeroDocumento.test(numeroContacto.value) ){
        generarError(claseNumeroContacto)
        console.log(numeroContacto.value)        
    }else{
        generarError(claseNumeroContacto, 'El numero de documento debe ser un número y no debe estar vacío')
    }     
    
    //validar email
    if( regExpEmail.test(email.value) ){
        generarError(claseEmail)
        console.log(email.value)
    }else{
        generarError(claseEmail, 'Error, ingrese un email válido')
    }

    //validar cargo
    if(cargo.value === ''){
        generarError(claseCargo, 'Selecciona una opción!')
    }else if(cargo.value === 'administrador' || cargo.value === 'auxiliar' ){
        generarError(claseCargo)
        console.log(cargo.value)
    }
    //validar contraseña
    if( regExpContraseña.test(password.value) ){
        generarError(clasePassword)
        console.log(password.value)
    }else{
        generarError(clasePassword, 'Ingrese una mayuscula, minuscula y un numero como minimo')
    }
    //validar verificar contraseña
    if( password.value === verificarPassword.value ){
        generarError(claseVerificarPassword)
        console.log(verificarPassword.value)
    }else{
        generarError(claseVerificarPassword, 'Las contraseñas no coinciden')
    }
    //validar sede
    if( sede.value != '' ){
        generarError(claseSede)
        console.log(sede.value)
    }else{
        generarError(claseSede, 'El campo no puede estar vacío')
    }

    //guardar datos en localstorage
        var valida_formulario = !!document.querySelector(".existe_error")
        console.log(valida_formulario)
        if(valida_formulario == false){
            localStorage.setItem("nombre", nombre.value)
            localStorage.setItem("apellido", apellidos.value)
            localStorage.setItem("tipo_documento", tipoDocumento.value)
            localStorage.setItem("numero_doc", numeroDocumento.value)
            localStorage.setItem("fecha_nacimiento", fecha.value)
            localStorage.setItem("correo", email.value)
            localStorage.setItem("cargo", cargo.value)
            localStorage.setItem("sede", sede.value)
            localStorage.setItem("pass", password.value)
            localStorage.setItem("telefono", numeroContacto.value)
        }
}
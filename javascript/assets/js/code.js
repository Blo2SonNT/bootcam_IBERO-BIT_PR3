// debugger

// var tituloPaginaHTML = document.getElementById("titulo-pagina")


// var nombre = prompt("Cual es su nombre?")

// if(nombre == 'susan'){
//     tituloPaginaHTML.innerHTML = "Hola " + nombre
// }else if(nombre == 'alejandro'){
//     tituloPaginaHTML.innerHTML = "Como estas " + nombre
// }else if(nombre == 'bairon'){
//     tituloPaginaHTML.innerHTML = "Como estas " + nombre
// }else if(nombre == 'leidy'){
//     tituloPaginaHTML.innerHTML = "Como estas " + nombre
// }else{
//     tituloPaginaHTML.innerHTML = "Usted no es bienvenido... fuera de aqui"
// }

// if(nombre == 'susan' || nombre == "miguel" || nombre == "leidy" || nombre == "pepe" || nombre == "juan"){
//     var edad = prompt("Cual es su edad?")
//     if(edad >= 20){
//         tituloPaginaHTML.innerHTML = "Hola " + nombre
//     }else{
//         var ciudad = prompt('Cual es la ciudad')
//         tituloPaginaHTML.innerHTML = "Usted es menor de 20 años y vive en " + ciudad
//     }
// }else{
//     tituloPaginaHTML.innerHTML = "Usted no es bienvenido... fuera de aqui"
// }
var tituloPaginaHTML = document.getElementById("titulo-pagina")
for (let pepe_contador = 1; pepe_contador <= 100; pepe_contador++) {
    console.log(pepe_contador)
    tituloPaginaHTML.innerHTML += pepe_contador+"<br>"
}

var pepe_contador = 1
while(pepe_contador <= 100){ 
    tituloPaginaHTML.innerHTML += pepe_contador+"<br>"
    pepe_contador++
}
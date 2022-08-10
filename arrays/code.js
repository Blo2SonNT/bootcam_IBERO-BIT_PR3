let estudiantes = ['susan', 'alejandro', 'kliche', 'pepe', 'kevin', 'walter', 'sergio']
console.log(estudiantes[0])

/**
 * Eliminar ultimo elemento del array
 */
//estudiantes.pop()

/**
 * Eliminar el primer elemento del array
 */
//estudiantes.shift()

/**
 * Agregar elemento al final
 */
//estudiantes.push('sergio')

/**
 * Agregar elementos al inicio
 */
//estudiantes.unshift("leidy")

/**
 * Agregar - eliminar elementos entre medias del array
 */
//estudiantes.splice(2, 0, "pepe", "juan")

/**
 * Buscar elementos por coincidencia de valor
 */
//estudiantes.indexOf("pepe")

/**
 * Unir varios arrays
 */
//estudiantes.concat(estudiantes_antiguos)

let numeros = [1, 2, 144, 234, 5, 56, 78, 1000, 3]
numeros.forEach(function(elemento_numero) {
    document.querySelector("#lista_numeros").innerHTML += `
        el numero es ${elemento_numero} <br>
    `
});

var titulos = document.querySelectorAll("[data-titulo]")
console.log(titulos)
var contador = 0
titulos.forEach(function(elemento_del_array) {
    if (contador == 2) {
        elemento_del_array.classList.add('text-success')
    } else {
        elemento_del_array.classList.add('text-danger')
    }
    contador++
});
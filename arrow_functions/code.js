let datos = ["1", "pepe", "lulu"]

datos.forEach((elemento_del_array, Posicion_del_elemento, el_array) => {
    console.log(elemento_del_array)
    console.log(`%c ${Posicion_del_elemento}`, "color:green")
    console.log(el_array)
    console.log("-----------------------------")
});

// pepe_funcion = () => {

// }
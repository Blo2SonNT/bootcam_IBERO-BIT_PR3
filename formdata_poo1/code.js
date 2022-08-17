let formulario = document.querySelector("#pepito-form-data-user")
let boton_formulario = document.querySelector("#btn-submit")

boton_formulario.addEventListener("click", (evento) => {
    evento.preventDefault()
        // console.log("le dio click al boton")
    let data_formulario = new FormData(formulario)
    let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let entradas_formulario = [...data_formulario.entries()]
    console.log(entradas_formulario)
    entradas_formulario.forEach((elemento_gatico, indice) => {

        if (elemento_gatico[1] == '') {
            document.querySelector(`#${elemento_gatico[0]}`).classList.add("border", "border-danger", "border-4")
        } else {
            document.querySelector(`#${elemento_gatico[0]}`).classList.remove("border", "border-danger", "border-4")
        }

        if (indice == 0) {
            if (regexCorreo.test(elemento_gatico[1]) == false) {
                Swal.fire({
                    icon: 'error',
                    title: 'ERES UNA BESTIA',
                    text: 'Ingresa bien tu correo, lindo'
                })
            }
        }
        console.log(elemento_gatico[1])
    });
    // let correo = data_formulario.get("inputEmail4")
    // if (regexCorreo.test(correo) == false) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'ERES UNA BESTIA',
    //         text: 'Ingresa bien tu correo, lindo'
    //     })
    // }
})

// function prueba_suma(numero1, numero2, numero3, numero4, numero5) {
//     let operacion = numero1 + numero2 + numero3 + numero4 + numero5
//     return operacion
// }

// let numero_a_sumar = [1, 5, 8, 32, 45]
// console.log(prueba_suma(...numero_a_sumar))
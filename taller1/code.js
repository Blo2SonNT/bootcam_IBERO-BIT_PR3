function sumatoria_ejercicio1() {
    let sumatoria_total = document.querySelector("#numero_ejercicio").value
    let operacion_total = 0
    for (let i = 1; i <= sumatoria_total; i++) {
        operacion_total = operacion_total + i
        document.querySelector("#total_sumatoria_resultado").innerHTML += `
            La sumatoria total es ${operacion_total}
        `
    }
}

function pizzeria_pepitos() {
    let edad = document.querySelector("#edad_pizzeria").value
    let sexo = document.querySelector("#sexo_pizzeria").value

    let premios = ['jugo', 'cerveza', 'pizza tres carnes', 'pizza hawaina']

    if (sexo == 'hombre') {
        if (edad <= 10) {
            // document.querySelector("#resultado_pizzeria").innerHTML = `
            //     Tiene derecho a reclamar ${premios[0]}
            // `
            Swal.fire({
                title: `Ganaste un ${premios[0]}`,
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(assets/img/trees.png)',
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("assets/img/nyan-cat.gif")
                    left top
                    no-repeat
                `
            })
        } else if (edad >= 18) {
            Swal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: `Tienes derecho a una ${premios[1]} y una ${premios[2]}`
            })
        }
    } else if (sexo == 'mujer') {
        if (edad >= 18) {
            Swal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: `Tienes derecho a una ${premios[1]} y una ${premios[3]}`
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Sera para una proxima vez!!',
        })
    }

    // if(sexo == 'hombre' && edad <= 18){

    // }else if(sexo == 'mujer' && edad >= 18){

    // }

}


localStorage.setItem("pizza", 3000)
localStorage.setItem("gaseosa", 9000)
localStorage.setItem("hamburguesas", 15000)
localStorage.setItem("perros", 5000)


function solicitar_comida() {
    let comida_solicitada = document.querySelector("#pedido_comida").value
    if (comida_solicitada != 'pagar') {
        if (localStorage.getItem(comida_solicitada) != null) {
            let precio_comida = parseInt(localStorage.getItem(comida_solicitada))
            let total_a_pagar = 0
            if (localStorage.getItem("precio_pago") == null) {
                total_a_pagar = total_a_pagar + precio_comida
                localStorage.setItem("precio_pago", total_a_pagar)
            } else {
                total_a_pagar = parseInt(localStorage.getItem("precio_pago"))
                total_a_pagar = total_a_pagar + precio_comida
                localStorage.setItem("precio_pago", total_a_pagar)
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No existe el plato solicitado',
                text: 'Digite algo bien... burro',
            })
            document.querySelector("#pedido_comida").value = ''
        }
    } else {
        let precio_factura = localStorage.getItem("precio_pago")
        Swal.fire({
            icon: 'info',
            title: `El precio a pagar es $${precio_factura}`,
        })
        localStorage.removeItem("precio_pago")
    }
}

function generar_tabla() {
    let inicio = document.querySelector("#numero_tabla").value
    let limite = document.querySelector("#limite_tabla").value
    let multiplicacion = 0
    for (let x = 1; x <= limite; x++) {
        multiplicacion = x * inicio
        document.querySelector("#resultado_tabla").innerHTML += `
            <h5>${inicio} X ${x} = ${multiplicacion}</h5>
        `

    }
}
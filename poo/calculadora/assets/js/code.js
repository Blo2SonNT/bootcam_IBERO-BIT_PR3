let botones_calculadora = document.querySelectorAll("[data-boton]")

botones_calculadora.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let valorBoton = e.target.getAttribute("data-boton")
        document.querySelector("#pantallaCalculadora").innerHTML += valorBoton
        if (valorBoton == "+" || valorBoton == "-" || valorBoton == "/" || valorBoton == "x" || valorBoton == "=" || valorBoton == "C") {
            switch (valorBoton) {
                case "+":
                    console.log("suma")
                    var numero_usuario = document.querySelector("#numero").value
                    if (localStorage.getItem('numero1') == null) {
                        localStorage.setItem("numero1", numero_usuario)
                    } else {
                        localStorage.setItem("numero2", numero_usuario)
                    }
                    localStorage.setItem("operacion", valorBoton)
                    document.querySelector("#numero").value = ''
                        // let input2 = document.createElement("input")
                        // input2.setAttribute("type", "text")
                        // input2.id = "numero2"
                        // document.querySelector("#data-numeros").appendChild(input2)
                    break;
                case "-":
                    console.log("resta")
                    break;
                case "/":
                    console.log("division")
                    break;
                case "x":
                    console.log("multiplicacion")
                    break;
                case "=":
                    console.log("resultado")
                    var numero_usuario = document.querySelector("#numero").value
                    if (localStorage.getItem("operacion") == "+") {
                        if (localStorage.getItem('numero2') == null) {
                            localStorage.setItem("numero2", numero_usuario)
                        }
                        let numero1_ls = localStorage.getItem("numero1")
                        let numero2_ls = localStorage.getItem("numero2")
                        let obj_operacion = new Operaciones(numero1_ls, numero2_ls);
                        let resultado = obj_operacion.suma()
                        document.querySelector("#pantallaCalculadora").innerHTML = resultado
                    }
                    break;
                case "C":
                    console.log("borrar")
                    document.querySelector("#pantallaCalculadora").innerHTML = '&nbsp;'
                    break;

            }
        } else {
            document.querySelector("#numero").value += valorBoton
        }
    })
});
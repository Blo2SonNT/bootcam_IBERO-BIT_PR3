document.querySelector("#btn-envio").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre_user").value
    let apellido = document.querySelector("#apellido_user").value

    let saludando_usuario = new Saludo(nombre, apellido)
    console.log(saludando_usuario.saludar())
    console.log(saludando_usuario.despedirse())
})
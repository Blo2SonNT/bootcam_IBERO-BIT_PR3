document.querySelector("#guardarEstudiante").addEventListener("click", () => {
    let formulario = document.querySelector("#formulario_estudiante")
    let infoForm = new FormData(formulario)
    let clase_estudainte = new Estudiantes(...infoForm.values())
    clase_estudainte.guardarEstudiante()


    // let form_nombre = document.querySelector("#nombre").value
    // let form_apellido = document.querySelector("#apellido").value
    // let form_edad = document.querySelector("#edad").value
    // let form_identificacion = document.querySelector("#identificacion").value


    // let clase_estudainte = new Estudiantes(form_nombre, form_apellido, form_identificacion, form_edad)
    // if (!clase_estudainte.existeRegistro()) {
    //     clase_estudainte.guardarEstudiante();
    // } else {
    //     alert("ya existe")
    // }

})
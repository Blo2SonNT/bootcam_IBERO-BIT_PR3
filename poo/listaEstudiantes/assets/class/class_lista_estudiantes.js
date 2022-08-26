class Estudiantes {
    nombre = ''
    identificacion = ''
    apellido = ''
    edad = ''

    constructor(nom_estudiante, apll_estudiante, ident_estudiante, edad_estudiante) {
        this.nombre = nom_estudiante
        this.identificacion = ident_estudiante
        this.apellido = apll_estudiante
        this.edad = edad_estudiante
    }

    guardarEstudiante() {
        localStorage.setItem("nombre", this.nombre)
        localStorage.setItem("identificacion", this.identificacion)
        localStorage.setItem("apellido", this.apellido)
        localStorage.setItem("edad", this.edad)
    }

    existeRegistro() {
        if (localStorage.getItem("identificacion") == this.identificacion) {
            return "Ya existe el registro"
        } else {
            return false
        }
    }


}
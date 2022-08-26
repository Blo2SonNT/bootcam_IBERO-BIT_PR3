class Saludo {
    nombre = ''
    apellido = ''
    curso = ''
    edad = ''

    constructor(nombre_persona, apellido_persona) {
        this.nombre = nombre_persona
        this.apellido = apellido_persona
    }

    saludar() {
        return `Hola ${this.nombre} ${this.apellido}, como estas?`
    }

    despedirse() {
        return `Adios ${this.apellido}`
    }
}
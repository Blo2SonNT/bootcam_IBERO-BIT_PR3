class Operaciones {
    numero1 = ''
    numero2 = ''

    constructor(dato1, dato2) {
        console.log(dato1)
        console.log(dato2)
        this.numero1 = dato1
        this.numero2 = dato2
    }

    suma() {
        let operacion = parseInt(this.numero1) + parseInt(this.numero2)

        return operacion
    }

    resta() {
        let operacion = this.numero1 - this.numero2
        return operacion
    }

    division() {
        let operacion = this.numero1 / this.numero2
        return operacion
    }

    multiplicacion() {
        let operacion = this.numero1 * this.numero2
        return operacion
    }
}
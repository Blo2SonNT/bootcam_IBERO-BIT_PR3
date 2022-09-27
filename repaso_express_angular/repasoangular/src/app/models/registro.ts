export class RegistroUsuario{
    _id?: string;
    nombre : string;
    apellido : string;
    correo : string;
    clave : string;

    constructor(nombre : string, apellido : string, correo : string, clave : string){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.clave = clave
    }
}


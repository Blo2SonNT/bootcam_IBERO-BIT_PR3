export class Usuario {
    nombre:string;
    correo:string;
    clave:string;

    constructor(nombre: string, correo: string, clave: string){
        this.nombre = nombre;
        this.correo = correo;
        this.clave = clave;
    }

}
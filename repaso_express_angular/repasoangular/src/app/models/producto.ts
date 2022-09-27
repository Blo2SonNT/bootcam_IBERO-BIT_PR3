export class Producto{
    _id?: string;
    nombre: string;
    precio: number;
    proveedor: string;
    categoria: string;

    constructor(nombreProducto:string, precio:number, proveedor:string, categoria:string){
        this.nombre = nombreProducto
        this.precio = precio
        this.proveedor = proveedor
        this.categoria = categoria
    }
}


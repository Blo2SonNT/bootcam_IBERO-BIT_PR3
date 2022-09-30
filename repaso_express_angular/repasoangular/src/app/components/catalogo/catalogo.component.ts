import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    listaProductos: Producto[] = [];

    constructor(private servicioProducto: ProductoService) { }


    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos() {
        this.servicioProducto.getProductos().subscribe((data) => {
            console.log(data)
            this.listaProductos = data
        }, (error) => {
            console.log(error)
        })
    }

}

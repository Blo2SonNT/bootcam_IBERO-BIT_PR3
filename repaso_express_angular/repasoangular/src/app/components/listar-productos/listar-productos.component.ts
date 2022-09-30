import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-listar-productos',
    templateUrl: './listar-productos.component.html',
    styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

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

    eliminarProducto(id: any) {
        Swal.fire({
            title: 'Esta seguro de eliminar este dato?',
            text: "Si es tan bestia de equivocarse, este proceso no sera reversible",
            icon: 'warning',
            iconColor: '#ff8c00',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.servicioProducto.deleteProducto(id).subscribe((data) => {
                    this.obtenerProductos()
                    Swal.fire({
                        title: 'Dato eliminado correctamente',
                        icon: 'success',
                        iconColor: '#84b530'
                    })
                }, (error) => {
                    console.log(error)
                })

            }
        })
    }

}

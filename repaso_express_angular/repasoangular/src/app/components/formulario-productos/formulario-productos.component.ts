import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'app-formulario-productos',
    templateUrl: './formulario-productos.component.html',
    styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    titulo_formulario = 'Crear producto'
    id: string | null;
    texto_boton = "Crear"


    constructor(private fb: FormBuilder, private servicioProducto: ProductoService, private idRoute: ActivatedRoute, private router: Router) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            proveedor: ['', Validators.required],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            categoria: ['', Validators.required],
            pepe: ['', Validators.required]
        })
        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        console.log("%c Este console solo se debe de mostrar cuando el componente de crear producto sea llamado", "color: yellow; font-size:1.5rem")
        // this.accionSolicitada()
    }

    /*
        ToDo: Este metodo se encargara de ACTUALIZAR y CREAR el dato


    |   tareas   | posicion condicional |
    | ---------- | -------------------- |
    | actualizar | pepe                 |
    | ---------- | -------------------- |
    | crear      | pepe                 |

    */

    dataProducto() {
        console.log(this.productoForm)


    }
}

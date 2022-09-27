import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Producto } from 'src/app/models/producto';

@Component({
    selector: 'app-formulario-productos',
    templateUrl: './formulario-productos.component.html',
    styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    constructor(private fb:FormBuilder) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            proveedor: ['', Validators.required],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            categoria: ['', Validators.required]
        })
    }

    ngOnInit(): void {
        console.log("%c Este console solo se debe de mostrar cuando el componente de crear producto sea llamado", "color: yellow; font-size:1.5rem")
    }

    agregarProducto(){
        const PRODUCTO:Producto = {
            nombre: this.productoForm.get('nombre')?.value,
            precio: this.productoForm.get('precio')?.value,
            proveedor: this.productoForm.get('proveedor')?.value,
            categoria: this.productoForm.get('categoria')?.value
        }
        console.log(PRODUCTO)
    }

}

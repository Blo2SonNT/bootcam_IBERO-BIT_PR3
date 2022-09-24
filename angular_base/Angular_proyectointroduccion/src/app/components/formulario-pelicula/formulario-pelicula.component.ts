import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
    selector: 'app-formulario-pelicula',
    templateUrl: './formulario-pelicula.component.html',
    styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

    peliculaForm: FormGroup;
    regexNumero = /^[0-9]+$/;

    constructor(private fb: FormBuilder) {
        this.peliculaForm = this.fb.group({
            titulo: ['', Validators.required],
            duracion: ['90', [Validators.required, Validators.pattern(this.regexNumero)]],
            genero: ['', Validators.required],
            imagen: ['', Validators.required],
            director: ['', Validators.required],
            yearLanzamiento: ['', Validators.required],
        })
    }

    ngOnInit(): void {
    }

    agregarPelicula(){
        const DATA_PELICULA : Pelicula = {
            titulo : this.peliculaForm.get('titulo')?.value,
            duracion : this.peliculaForm.get('duracion')?.value,
            genero : this.peliculaForm.get('genero')?.value,
            imagen : this.peliculaForm.get('imagen')?.value,
            director : this.peliculaForm.get('director')?.value,
            yearLanzamiento : this.peliculaForm.get('yearLanzamiento')?.value
        }

        console.log(JSON.stringify(DATA_PELICULA))
    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/registro';
import Swal from 'sweetalert2'
@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    registroForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    // regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

    constructor(private fb: FormBuilder) {
        this.registroForm = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            clave: ['', [Validators.required]],//Validators.pattern(this.regexPass)
            VericarClave: ['', Validators.required],
        })
    }

    ngOnInit(): void {
    }

    registrarUsurio() {
        // console.log(this.registroForm.get('clave')?.value)
        // console.log(this.registroForm.get('VericarClave')?.value)
        let varClave = this.registroForm.get('clave')?.value
        let verificar = this.registroForm.get('VericarClave')?.value
        if (varClave != verificar) {
            Swal.fire({
                icon: 'error',
                title: 'Bruto, bestia, animal salveje',
                text: 'Sus contraseñas no coinciden... ciego',
            })
        } else {
            if (!this.regexCorreo.test(this.registroForm.get('correo')?.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Su correo se ve algo sospechoso',
                    text: 'No se peye!',
                })
            } else {
                const DATA_USUARIO: Usuario = {
                    nombre: this.registroForm.get('nombre')?.value,
                    correo: this.registroForm.get('correo')?.value,
                    clave: this.registroForm.get('clave')?.value
                }

                console.log(JSON.stringify(DATA_USUARIO))
            }

        }
    }



}

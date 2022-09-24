import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioPeliculaComponent } from './components/formulario-pelicula/formulario-pelicula.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contactenos', component: ContactoComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ingreso', component: IngresoComponent },
    { path: 'crear-pelicula', component: FormularioPeliculaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

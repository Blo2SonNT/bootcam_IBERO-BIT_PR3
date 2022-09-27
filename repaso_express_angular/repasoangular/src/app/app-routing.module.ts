import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path:'', component:InicioComponent },
    { path:'registrar-producto', component:FormularioProductosComponent },
    { path:'productos', component:ListarProductosComponent },
    { path:'404', component:NotFoundComponent },
    { path:'**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

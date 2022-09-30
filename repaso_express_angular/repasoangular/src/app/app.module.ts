import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CatalogoComponent } from './components/catalogo/catalogo.component';

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        FormularioProductosComponent,
        ListarProductosComponent,
        NotFoundComponent,
        NavbarComponent,
        CatalogoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

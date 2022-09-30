import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    url = 'http://localhost:4000/api'

    constructor(private http:HttpClient) { }

    getProductos(): Observable<any>{
        return this.http.get(`${this.url}/productos`)
    }

    deleteProducto(id:string): Observable<any>{
        return this.http.delete(`${this.url}/borrar-producto/${id}`)
    }

    postProducto(producto:Producto): Observable<any>{
        return this.http.post(`${this.url}/crear-producto`, producto)
    }

    getProducto(id:string): Observable<any>{
        return this.http.get(`${this.url}/productos/${id}`)
    }

    putProducto(id:string, producto:Producto):Observable<any>{
        return this.http.put(`${this.url}/actualizar-producto/${id}`, producto)
    }
}

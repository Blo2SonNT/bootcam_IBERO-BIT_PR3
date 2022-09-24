import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {

    url = 'http://localhost:4000/api';

    constructor(private http: HttpClient) { }

    postPeliculas(pelicula: Pelicula): Observable<any>{
        return this.http.post(`${this.url}/guardar-pelicula`, pelicula)
    }
}

export class Pelicula {
    titulo: string;
    duracion: number;
    genero: string;
    imagen: string;
    director: string;
    yearLanzamiento: number;

    constructor(titulo: string, duracion: number, genero: string, imagen: string, director: string, yearLanzamiento: number) {
        this.titulo = titulo
        this.duracion = duracion
        this.genero = genero
        this.imagen = imagen
        this.director = director
        this.yearLanzamiento = yearLanzamiento
    }

}

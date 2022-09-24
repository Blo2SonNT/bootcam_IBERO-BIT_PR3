const mongoose = require('mongoose')

const PeliculasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    yearLanzamiento: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('pelicula', PeliculasSchema)
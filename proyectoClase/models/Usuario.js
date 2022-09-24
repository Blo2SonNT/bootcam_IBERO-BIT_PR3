const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuarioschingone', UsuarioSchema)
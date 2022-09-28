const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('producto', ProductoSchema)
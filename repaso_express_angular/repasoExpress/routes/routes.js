const express = require('express');
const router = express.Router();
const controladorProducto = require('../controllers/productoController')


router.get('/productos', controladorProducto.obtenerProductos)
router.post('/crear-producto', controladorProducto.crearProducto)
router.put('/actualizar-producto/:id', controladorProducto.actualizarProducto)
router.delete('/borrar-producto/:id', controladorProducto.borrarProducto)
router.get('/productos/:id', controladorProducto.obtenerProductoEspecifico)

module.exports = router
const express = require('express')
const router = express.Router()
const asistenciaController = require('../controllers/asistenciaController')
const usuarioController = require('../controllers/usuarioController')


router.get('/pepe', asistenciaController.obtenerAsistencias)
router.post('/pepeinserta', asistenciaController.crearAsistencia)

router.post('/crea-usuario', usuarioController.crearUsuario)

module.exports = router
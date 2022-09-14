const express = require('express')
const router = express.Router()
const asistenciaController = require('../controllers/asistenciaController')

router.get('/pepe', asistenciaController.obtenerAsistencias)

router.post('/pepeinserta', asistenciaController.crearAsistencia)


module.exports = router
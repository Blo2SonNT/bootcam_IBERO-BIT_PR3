const express = require('express')
const router = express.Router()
const asistenciaController = require('../controllers/asistenciaController')
const usuarioController = require('../controllers/usuarioController')
const peliculasController = require('../controllers/peliculasController')

//Modulo de ejmplo
router.get('/pepe', asistenciaController.obtenerAsistencias)
router.post('/pepeinserta', asistenciaController.crearAsistencia)
    //Modulo de usuarios
router.post('/crea-usuario', usuarioController.crearUsuario)
    //Modulo de peliculas
router.post('/guardar-pelicula', peliculasController.crearPelicula)


module.exports = router
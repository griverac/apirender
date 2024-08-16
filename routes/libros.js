const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Crear un libro
router.post('/', librosController.agregarLibro);

// Obtener todos los libros
router.get('/', librosController.obtenerLibros);

// Obtener un libro por código
router.get('/:codigo', librosController.obtenerLibroPorCodigo);

// Actualizar un libro
router.put('/:codigo', librosController.actualizarLibro);

// Eliminar un libro
router.delete('/:codigo', librosController.eliminarLibro);

module.exports = router;

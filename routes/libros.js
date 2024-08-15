const express = require('express');
const Libro = require('../models/libro');
const router = express.Router();

// Crear un libro
router.post('/', async (req, res) => {
    try {
        const libro = await Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener un libro por código
router.get('/:codigo', async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.codigo);
        if (libro) {
            res.json(libro);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar un libro
router.put('/:codigo', async (req, res) => {
    try {
        const [updated] = await Libro.update(req.body, {
            where: { codigo: req.params.codigo }
        });
        if (updated) {
            const updatedLibro = await Libro.findByPk(req.params.codigo);
            res.json(updatedLibro);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un libro
router.delete('/:codigo', async (req, res) => {
    try {
        const deleted = await Libro.destroy({
            where: { codigo: req.params.codigo }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

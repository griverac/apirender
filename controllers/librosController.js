// controllers/librosController.js
const { Libro } = require('../models/libro');

// Obtener todos los libros
const obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros.' });
    }
};

// Obtener un libro por código
const obtenerLibroPorCodigo = async (req, res) => {
    const { codigo } = req.params;
    try {
        const libro = await Libro.findOne({ where: { codigo } });
        if (libro) {
            res.json(libro);
        } else {
            res.status(404).json({ error: 'Libro no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro.' });
    }
};

// Agregar un nuevo libro
const agregarLibro = async (req, res) => {
    const { codigo, nombre, editorial, autor, genero, pais, paginas, año, precio } = req.body;
    try {
        const nuevoLibro = await Libro.create({ codigo, nombre, editorial, autor, genero, pais, paginas, año, precio });
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el libro.' });
    }
};

// Actualizar un libro existente
const actualizarLibro = async (req, res) => {
    const { codigo } = req.params;
    const { nombre, editorial, autor, genero, pais, paginas, año, precio } = req.body;
    try {
        const libro = await Libro.findOne({ where: { codigo } });
        if (libro) {
            libro.nombre = nombre;
            libro.editorial = editorial;
            libro.autor = autor;
            libro.genero = genero;
            libro.pais = pais;
            libro.paginas = paginas;
            libro.año = año;
            libro.precio = precio;
            await libro.save();
            res.json(libro);
        } else {
            res.status(404).json({ error: 'Libro no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro.' });
    }
};

// Eliminar un libro
const eliminarLibro = async (req, res) => {
    const { codigo } = req.params;
    try {
        const libro = await Libro.findOne({ where: { codigo } });
        if (libro) {
            await libro.destroy();
            res.json({ mensaje: 'Libro eliminado correctamente.' });
        } else {
            res.status(404).json({ error: 'Libro no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro.' });
    }
};

// Exportar los controladores
module.exports = {
    obtenerLibros,
    obtenerLibroPorCodigo,
    agregarLibro,
    actualizarLibro,
    eliminarLibro
};

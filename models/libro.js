const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Libro = sequelize.define('Libro', {
    codigo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    paginas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    año: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    precio: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

module.exports = Libro;

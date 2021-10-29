const path = require('path');
const express = require('express');

const morgan = require("morgan");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//conexion a la base de datos
(async() => {
    const estado = await mongoose.connect('mongodb://localhost/prueba');
    // modelo
    const Usuario = mongoose.model('Usuario', { nombre: String });
    const usuario1 = new Usuario({ nombre: 'prueba2' });
    const guardarUsuario = await usuario1.save();
    const resultado = await Usuario.find();
    console.log(resultado);
})();
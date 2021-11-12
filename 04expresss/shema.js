const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datos = new Schema({
    maya: String,
    materia: String,
    docente: String,
    curso: String,
});
module.exports = mongoose.model('MENSAJES', datos);
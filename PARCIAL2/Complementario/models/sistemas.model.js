const mongoose = require('mongoose');
const { Schema } = mongoose;


const Respuestas = new Schema({
    opcion: { type: String },

}, {
    timestamps: { createdAt: true, updatedAt: true }
});

// funcion para obtener la respuesta de la pregunta y la opcion y guardarla en la base de datos con la hora en que se eligio la pregunta

module.exports = mongoose.model("FACCI", Respuestas);
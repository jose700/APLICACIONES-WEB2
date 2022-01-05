const { Schema, model } = require('mongoose');


const sistemaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],

    },
    curso: {
        type: String,
        required: [true, 'El curso es obligatorio'],
    },
    edad: {
        type: Number,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: false
    }
});

sistemaSchema.methods.toJSON = function() {
    const { __v, estado, ...data } = this.toObject();
    return data;
};

module.exports = model('Sistema', sistemaSchema);
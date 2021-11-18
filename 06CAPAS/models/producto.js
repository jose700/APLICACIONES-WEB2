const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorioa'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio'],
    },
    precio: {
        type: Number,
        default: 0,
    },
    costo: {
        type: Number,
        default: 0,
    },
    minimo: {
        type: Number,
        default: 0,
    },
});

ProductoSchema.methods.toJSON = function() {
    //const { nombre, precio, costo } = this.toObject();
    const { __v, estado, ...data } = this.toObject();

    // si se dedea incuir una propiedad en el objeto
    //return {__v, estado, ....data} 
    return data;
};




module.exports = model('Producto', ProductoSchema);
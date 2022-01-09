const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    administrador: {
        type: String,


    },
    invitado: {
        type: String,


    },
    gestion: {
        type: String,


    },
    estado: {
        type: Boolean,
        default: true,

    },
});

module.exports = model('User', UserSchema)
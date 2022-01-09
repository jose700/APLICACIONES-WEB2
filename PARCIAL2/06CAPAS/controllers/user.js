const { User } = require('../models');
const { response } = require('express');



///  GET   http://localhost:3000/api/users/
const obtenerUsers = async(req, res) => {
    const users = await User.find();
    res.json({

        users
    });
};
const obtenerUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        ok: true,
        user
    });
};

const crearUser = async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        ok: true,
        user,
        mensaje: 'Datos insertados'
    });
};

const actualizarUser = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.json({
        ok: true,
        user,
        mensaje: 'Datos actualizados'
    });
};

const borrarUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({
        ok: true,
        mensaje: 'Datos borrado'
    });
};

module.exports = {
    obtenerUsers,
    obtenerUser,
    crearUser,
    actualizarUser,
    borrarUser
};
const { Sistema } = require('../models');
const { response } = require('express');

///  GET   http://localhost:3000/api/productos/
const obtenerSistemas = async(req, res = response) => {
    ///  GET   http://localhost:3000/api/productos   ?limite=100?desde=0

    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, sistemas] = await Promise.all(
        [
            Sistema.countDocuments(query),
            Sistema.find(query)
            .populate('categoria', 'nombre', 'estado').skip(desde).limit(limite)
        ]
    );

    res.json({
        total,
        sistemas
    });
};
///  GET   http://localhost:3000/api/productos/234234234324
const obtenerSistema = async(req, res = response) => {
    const { id } = req.params;
    const sistema = await Sistema.findById(id);
    res.json(sistema);
};
///  POST   http://localhost:3000/api/productos/       body { nombre:'', precio:23, costo:23}
const crearSistema = async(req, res = response) => {
    const { estado, ...body } = req.body;

    const existeSistema = await Sistema.findOne({ nombre: body.nombre });
    if (existeSistema) {
        return res.status(400).json({
            msg: `La materia con nombre ${existeSistema.nombre} ya existe`
        });
    }

    const data = {
        ...body,
        nombre: body.nombre
    };

    const sistema = new Sistema(data);
    const sistemaNuevo = await sistema.save();
    res.status(201).json(sistemaNuevo);

};
///  PUT   http://localhost:3000/api/productos/27364527345723645
//    body { nombre:'modificar', precio:23}
const actualizarSistema = async(req, res = response) => {
    const { id } = req.params;
    const { estado, ...data } = req.body;
    const sistemaModificado = await Sistema.findByIdAndUpdate(id, data, { new: true });
    res.json(sistemaModificado);

};
///  DELETE   http://localhost:3000/api/productos/27364527345723645
const borrarSistema = async(req, res = response) => {
    const { id } = req.params;
    const sistemaBorrado = await Sistema.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(sistemaBorrado);
};

module.exports = {
    obtenerSistemas,
    obtenerSistema,
    crearSistema,
    actualizarSistema,
    borrarSistema
};
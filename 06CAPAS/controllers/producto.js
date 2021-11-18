const { Producto } = require('../models');
const { response } = require('express');


const ObtenerProductos = async(req, res = response) => {
    ///Get http://localhost:3000/api/productos?limite =100?desde=0?estado=true

    const { limite = 10, desde = 0 } = req.query;
    const query = {
        estado: true
    };
    const [total, productos] = await Promise.all(
        Producto.countDocuments(query),
        Producto.find(query).skip(desde).limit(limite),
    );
    /*const cuantos = await Producto.countDocuments(query);
    const resultado = await Producto.find(query).skip(desde).limit(limite);*/
    res.json({
        total,
        productos
    });
};

const ObtenerProducto = async(req, res) => {

};
const crearProducto = async(req, res) => {

};
const actualizarProducto = async(req, res) => {

};
const borrarProducto = async(req, res) => {

};

module.exports = {
    ObtenerProductos,
    ObtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
};
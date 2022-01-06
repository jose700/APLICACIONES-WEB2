var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {

    axios.get('http://localhost:5000/v1/pruebas/api/productos').then(respuesta => {

        console.log(respuesta.data.productos);

        res.render('index', { productos: respuesta.data.productos });

    });

    //res.render('index', { title: 'Prueba sexto b' });


});
router.get('/producto/nuevo', (req, res, next) => {
    res.render('productoForm', {});
});
router.get('/producto/modificar/:id', (req, res, next) => {
    //consultar por el producto por id y pasarla como parametro [a]metro a la vista
    axios.get(`http://localhost:5000/v1/pruebas/api/productos/${req.params.id}`).then(respuesta => {
        res.render('productoForm', { producto: respuesta.data });
    });
    //res.render('productoForm', { producto: { _id: "", nombre: "", precio: "", costo: "", minimo: "" } });
});
router.get('/producto/eliminar/:id', (req, res, next) => {
    axios.delete(`http://localhost:5000/v1/pruebas/api/productos/${req.params.id}`).then(respuesta => {
        res.render('productoForm', { producto: respuesta.data });
    });
});

module.exports = router;
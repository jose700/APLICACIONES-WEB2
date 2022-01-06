var express = require('express');
var router = express.Router();

const axios = require('axios');


router.post('/producto/operar', (req, res, next) => {
    console.log(req.body);
    if (req.body) {
        axios.post('http://localhost:3000/v1/pruebas/api/productos/', {
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo
        }).then(respuesta => {
            res.redirect('/');
        });
    } else {
        axios.put('http://localhost:3000/v1/pruebas/api/productos/' + req.body.id, {
            nombre: req.body.nombre,
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo
        }).then(respuesta => {
            res.redirect('/');
        });
    }

});

module.exports = router;
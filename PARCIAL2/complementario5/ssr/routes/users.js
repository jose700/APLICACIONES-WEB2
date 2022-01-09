var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {

    axios.get('http://localhost:5000/v1/pruebas/api/users').then(respuesta => {
        console.log(respuesta.data.users);
        res.render('index', { users: respuesta.data.users });
    });

    //res.render('index', { title: 'Prueba sexto b' });


});
router.get('/user/nuevo', (req, res, next) => {
    res.render('userForm', {});
});
router.get('/user/modificar/:id', (req, res, next) => {
    // consultar por id el producto y pasarlo como par[a]metro a la vista
    axios.get(`http://localhost:5000/v1/pruebas/api/users/${req.params.id}`).then(respuesta => {
        res.render('userForm', { producto: respuesta.data });

    });
});
router.get('/producto/eliminar/:id', (req, res, next) => {
    axios.delete(`http://localhost:5000/v1/pruebas/api/users/${req.params.id}`).then(respuesta => {
        res.redirect('/');
    });
});




module.exports = router;
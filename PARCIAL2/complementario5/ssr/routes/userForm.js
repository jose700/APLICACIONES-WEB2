var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET home page. */
router.post('/user/operar', (req, res, next) => {

    console.log(req.body);

    if (req.body._id === "") {
        axios.post(`http://localhost:5000/v1/pruebas/api/users`, {
            administrador: req.body.administrador,
            invitado: req.body.invitado,
            gestion: req.body.gestion,
        }).then(respuesta => {
            res.redirect('/');
        });

    } else {
        axios.put(`http://localhost:5000/v1/pruebas/api/users/${req.body._id}`, {
            administrador: req.body.administrador,
            invitado: req.body.invitado,
            gestion: req.body.gestion,
        }).then(respuesta => {
            res.redirect('/');
        });
    }
});




module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const verify = require('jsonwebtoken/verify');
const app = express();


app.get('/api', (req, res) => {
    res.json({
        mensaje: 'HOLA MUNDO CON JWT'
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        nombre: 'PRUEBA',
        email: 'prueba@gmail.com'
    };
    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
    //res.json(user);
    /*res.json({
        mensaje: 'BIENVENIDO USUARIO LOGUEADO'
    });*/
});
app.post('/api/posts', verifyToken, (req, res) => {
    //res.json({ mensaje: 'post fue creado' });
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);

        } else {
            res.json({
                mensaje: 'post fue creado',
                authData
            });
        }
    });
});

function verifyToken(req, res, next) {
    const tokenHeader = req.headers['autorization'];
    if (typeof tokenHeader !== 'undefined') {
        const tokenH = tokenHeader.split("")[1];
        req.token = tokenH;
        next();
    } else {
        return res.status(403).json({ mensaje: 'No tienes autorizacion' });
    }
}

app.set('puerto', process.env.PORT || 4000);

app.listen(app.get('puerto'), () => {
    console.log(`SERVIDOR CONECTADO EN EL PUERTO ${app.get('puerto')}`);
});
const express = require('express');
const morgan = require("morgan");
const { MONGO_URI } = require("./config");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//conexion a la base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(db =>
    console.log(`TE HAS CONECTADO A LA BASE DE DATOS ${db}`)).catch(err => console.log(err));


app.set('port', process.env.PORT || 5000);

// conexion
app.listen(app.get('port'), () => {
    console.log(`conectado al puerto ${app.get('port')}`);
});







/*const path = require('path');
const express = require('express');

const morgan = require("morgan");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//conexion a la base de datos
mongoose.connect('').then(db => (
    console.log('te has conectado a la base de datos')
)).catch(err => console.log('error de conexion', err));

// modelo
const Usuario = mongoose.model("Usuario", { nombre: String });
const Usuario1 = new Usuario({ nombre: "Josè" });
//const Usuario2 = new Usuario({ nombre: "L" });
//Usuario2.save();
Usuario1.save();

// consultar el dato añadido en la db

Usuario.find().then(console.log);
// configuracion de las vistas
app.set('views', path.join(__dirname, 'view'));
app.set('views engine', 'ejs');

//rutas 
app.set(morgan('dev'));
app.set(express.urlencoded({ extends: false }));
// conexion al puerto

app.set('puerto', process.env.PORT || 5000);

app.listen(app.get('puerto'), () => {
    console.log(`conectado al puerto ${app.get('puerto')}`);
});*/
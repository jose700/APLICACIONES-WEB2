/// traer datos de configuracion   PUERTO Y LA CADENA DE CONEXION  MONGODB_CNN Y PORT
const express = require('express');

require('dotenv').config();
const Server = require('./server');
const cors = require('cors');


const app = express();
app.use(cors());
/// crear una instancia del servidor y levantarlo

const server = new Server();

///LEVANTAR EL SERVIDOR
server.listen();
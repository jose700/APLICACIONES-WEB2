const express = require('express');
const app = express();

const response = {
    data: [],
    services: "All services",
    arquitectura: "Microservicios"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/books", (req, res) => {
    response.data.push("Html 24 horas xdd", "JavaScript patrones solid", "Desarrollo mòvil");
    console.log('Get books data')
    return res.send(response);
});
module.exports = app;
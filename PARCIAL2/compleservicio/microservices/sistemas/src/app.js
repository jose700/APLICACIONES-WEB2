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

app.get("/api/v2/sistemas", (req, res) => {
    response.data.push("Malla", "Silabo", "Docentes");
    console.log('Get sistema data');
    return res.send(response);
});

module.exports = app;
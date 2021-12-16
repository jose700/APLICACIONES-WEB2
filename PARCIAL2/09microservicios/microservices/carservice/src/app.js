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

app.get("/api/v2/cars", (req, res) => {
    response.data.push("Kia", "Toyota", "Chevrolet");
    console.log('Get cars data');
    return res.send(response);
});
module.exports = app;
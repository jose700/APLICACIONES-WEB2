const express = require('express');
const app = express();

const response = {
    data: [],
    services: "All services",
    arquitectura: "Monolithic"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v1/users", (req, res) => {

    response.data.push("Jose", "Luis", "Campuzano");
    return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
    response.data.push("Kia", "Toyota", "Chevrolet");
    return res.send(response);
});



app.get("/api/v1/books", (req, res) => {
    response.data.push("Html 24 horas xdd", "JavaScript patrones solid", "Desarrollo mòvil");
    return res.send(response);
});



module.exports = app;
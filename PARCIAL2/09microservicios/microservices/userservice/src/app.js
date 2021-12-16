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

app.get("/api/v2/users", (req, res) => {
    response.data.push("Jose", "Luis", "Campuzano");
    console.log('Get users data');
    return res.send(response);
});

module.exports = app;
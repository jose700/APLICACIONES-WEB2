const fs = require('fs');
const { MONGO_URI } = require('../config');
const { Sistemas } = require('../models');
const express = require('express');

const app = express();
app.use(express.json());


const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
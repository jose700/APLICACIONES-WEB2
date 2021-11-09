//const { response } = require("express");
const fs = require("fs");

const http = require('http');

const puerto = 3000;
const indica = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const error = fs.readFileSync('./error.html');
http.createServer((req, res) => {
    if (req.url === "/prueba") {
        console.log("ejemplo");
        res.writeHead(200, { "Content-Type": "text/html" });
        //res.write("ejemplo");
        res.write(indica);
    } else if (req.url === "about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        //res.write("ejemplo");
        res.write(about);
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        //res.write("ejemplo");
        res.write(error);
    }
    res.end();
}).listen(puerto, () => {
    console.log(`te has conectado al puerto http://localhost:${puerto}`);
});
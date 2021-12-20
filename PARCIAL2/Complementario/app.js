const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { MONGO_URI } = require('./config');

const mongoose = require('mongoose');
const { Sistemas } = require('./models');


// const e = require('./Routes/index.routes')
// const gui = require('./Routes/index.routes')

const express = require('express');



const app = express();
app.use(express.json());


let client;
let sessionData;

mongoose.connect(MONGO_URI).then(console.log("Conectada a la base de datos..."));

const SESSION_FILE_PATH = './session.json';

const whitSession = () => {

    sessionData = require(SESSION_FILE_PATH);

    client = new Client({
        session: sessionData
    });

    client.on('ready', () => {
        console.log('El Cliente esta  Listo 👨‍💻');
        listenMessage();


    });

    client.initialize().then(console.log("Esta Correcto"));
    deploy();

};
const whitOutSession = () => {

    console.log('No se encontro session guardada');
    client = new Client();
    client.on('qr', qr => {
        console.log(qr);
        qrcode.generate(qr, { small: true });
    });

    client.on('authenticated', (session) => {
        sessionData = session;
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
    client.initialize();
};

const listenMessage = () => {
    client.on('message', (msg) => {
        const { from, to, body } = msg;


        switch (body) {


            case "A":
                const insertarBd = () => {
                    app.post('/', async(req, res) => {

                        const ho = {
                            opcion: body
                        };
                        const j = await Sistemas.create(ho);
                        console.log(j);
                        res.send({
                            insertado: "ok",
                            respuestas: j

                        });
                        res.end();

                    });
                };
                const obtener = () => {
                    app.get('/', async(req, res) => {

                        const obtenido = await Sistemas.find();
                        res.send({
                            ok: obtenido
                        });
                        res.end();
                    });



                };

                const actualizar = () => {
                    app.put('/', async(req, res) => {

                        const cambio = await Sistemas.updateOne({ opcion: "CAMBIADO" }, );
                        res.send({
                            correcto: cambio
                        });
                        res.end();

                    });
                };
                const eliminar = () => {
                    app.delete('/', async(req, res) => {

                        await Sistemas.findOneAndRemove({ body });
                        res.send({
                            eliminado: "DELETED"
                        });
                        res.end();
                    });
                };
                insertarBd();
                obtener();
                actualizar();
                eliminar();
                // sendMessage(from, "INGENIERIA EN SISTEMAS\nA) MALLA \nB) SILABO\nC) DOCENTES\nD) MENU PRINCIPAL");
                sendMessage(from, "INGENIERIA EN SISTEMAS\n\nPOR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES:\n\n1) MALLA\n2) DOCENTES\nS) MENU PRINCIPAL");

                break;

            case "1":
                sendMedia(from, './Maya_Sistemas.pdf');
                break;
            case "2":
                /*sendMessage(from, "DOCENTES DE LA CARRERA DE INGENIERIA EN SISTEMAS\nING.JACINTO REYES\nING. ROBERT MOREIRA\nING.JOHN CEVALLOS\nING.EDGAR PANCHANA");*/

                sendMessage(from, "DOCENTES DE LA CARRERA DE INGENIERIA EN SISTEMAS\n\nING.ADRIANA MACIAS\nING.FABRICIO RIVADENEIRA\nING.HIRAIDA SANTANA\nING.JORGE HERRERA\nING.JOSÈ ARTEAGA\nING.JOSÈ BAZURTO\nING.LUZMILA LÒPEZ\nING.OSCAR GONZÀLEZ\nING.PEDRO PIHUAVE\nING.ROBERT MOREIRA\nING.RUBÈN SOLÒRZANO\nING.VIVIANA GARCÌA\nING.WILLIAM DELGADO\nING.WINTER MOLINA\n\nPOR FAVOR ESCRIBA A) PARA REGRESAR AL MENÙ OPCIONES.");

                break;
            case "S":
                // sendMedia(from, './ULEAM.bmp\n\n');
                sendMessage(from, "UNIVERSIDAD LAICA ELOY ALFARO DE MANABÌ\n\nFACULTAD DE CIENCIAS INFORMÀTICAS(facci)\n\nOFERTAS ACÀDEMICAS DE LA FACCI\n\nPOR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES:\n\nA) INGENIERIA EN SISTEMAS\nB) INGENIERIA EN TECNOLOGIAS DE LA INFORMACIÒN\n");
                break;
            case "B":
                sendMessage(from, "INGENIERIA EN TECNOLOGIAS DE LA INFORMACIÒN\nPOR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES:\n\n3) MALLA CURRICULAR\n4) DOCENTES\nS) MENU PRINCIPAL");
                break;
            case "3":
                sendMedia(from, './Maya_Ti.pdf');
                break;
                /* case "6":
                     sendMessage(from, "SILABO NO DISPONIBLE POR EL MOMENTO\n\nPOR FAVOR ESCRIBA B) PARA REGRESAR AL MENÙ OPCIONES.");
                     break;*/
            case "4":
                sendMessage(from, "DOCENTES DE LA CARRERA DE INGENIERIA EN TECNOLOGIAS DE LA INFORMACIÒN \n\nING.ALEX SANTAMARIA\nING.EDGARDO PANCHANA\nING.EDISÒN ALMEIDA\nING.ELSA VERA\nING.HOMERO MENDOZA\nING.JACINTO REYES\nING.EDDY SOLORZANO\nING.JOHN CEVALLOS\nING.JOHNNY LARREA\nING.JORGE MOYA\nING.JORGE PINCAY\nING.JUAN SENDÒN\nING.KLEVER DELGADO\nING.LEO CEDEÑO\nING.MARCO AYOVÌ\nING.LUIS MENDOZA\nING.MIKE MACHUCA\nING.JONNY PEREZ\nING.PATRICIA QUIROZ\nING.SAÙL MURILLO\nING.WALTER GARCÌA\n\nPOR FAVOR ESCRIBA B) PARA REGRESAR AL MENÙ DE OPCIONES.");

                break;
            default:
                //sendMedia(from, './ULEAM.bmp\n\n');
                sendMessage(from, "UNIVERSIDAD LAICA ELOY ALFARO DE MANABÌ\n\nFACULTAD DE CIENCIAS INFORMÀTICAS(facci)\n\nOFERTAS ACÀDEMICAS DE LA FACCI\n\nPOR FAVOR SELECCIONE UNA DE LAS SIGUIENTES OPCIONES:\n\nA) INGENIERIA EN SISTEMAS\nB) INGENIERIA EN TECNOLOGIAS DE LA INFORMACIÒN\n");
                break;

        }

    });
};


const sendMessage = (to, message) => {
    client.sendMessage(to, message);
};

const sendMedia = (to, file) => {
    const mediaFile = MessageMedia.fromFilePath(`./Media/${file}`);
    client.sendMessage(to, mediaFile);
};

const deploy = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
};



(fs.existsSync(SESSION_FILE_PATH)) ? whitSession(): whitOutSession();
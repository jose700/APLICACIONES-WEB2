const express = require('express');
const cors = require('cors');


const app = express();

const puerto = 3000;
let estudiantes = [];
//  mildewere
app.use('/public', express.static(__dirname + '/public'));
app.use(cors()).use(express.json());

// http://localhost:3000/api/sextob/v1/estudiantes GET, POST,PATCH PUT, DELETE
//http://localhost:3000/1313131313
app.get('/', (req, res) => {
    res.status(200).send(estudiantes);
});
app.get('/:cedula', (req, res) => {
    const { cedula } = req.params;
    const filtrar = estudiantes.filter(p => p.cedula == cedula);
    if (filtrar.length > 0) {
        {
            res.status(200).send(filtrar[0]);
        }
    }
    res.status(404).send({
        mensaje: 'No existe el estudiante con ese nùmero de cedula'
    });

});
app.post('/', (req, res) => {
    console.log(req.body);
    const { body } = req;
    estudiantes.push(body);
    // estudiantes.push(req.body);
    res.status(200).send({
        mensaje: 'El estudiante se inserto exitosamente',
        estudiante: body
    });
});
app.put('/', (req, res) => {
    const { cedula, nombre, curso } = req.body;
    let estudiante = estudiantes.filter(p => p.cedula === cedula)[0];
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    res.status(200).send({
        mensaje: 'El estudiante se actualizo exitosamente',
        respuesta: estudiante

    });
});
app.delete('/:cedula', (req, res) => {

    const { cedula } = req.params;
    estudiantes.filter(p => p.cedula !== cedula);
    res.status(200).send({
        mensaje: 'El estudiante se elimino exitosamente',
        respuesta: estudiantes
    });
});



app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
const { Router } = require('express');
const { check } = require('express-validator');

const {
    crearSistema,
    actualizarSistema,
    borrarSistema,
    obtenerSistemas,
    obtenerSistema
} = require('../controllers').Sistema;

const { validarCampos } = require('../middlewares');


const router = Router();

////      https://localhost:3000/api/v1      /productos     /298374283746287346

router.get('/', obtenerSistemas);
router.get('/:id', [check('id', 'Su id de mongo no es vAlido').isMongoId()], obtenerSistema);
router.post('/', [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,
], crearSistema);
router.put('/:id', actualizarSistema);
router.delete('/:id', [check('id', 'No es vAlido este id').isMongoId()], borrarSistema);

module.exports = router;
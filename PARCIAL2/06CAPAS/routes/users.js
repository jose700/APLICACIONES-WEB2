const { Router } = require('express');
const { check } = require('express-validator');

const {
    crearUser,
    actualizarUser,
    borrarUser,
    obtenerUser,
    obtenerUsers
} = require('../controllers').User;

const { validarCampos } = require('../middlewares');


const router = Router();

////      https://localhost:3000/api/v1      /productos     /298374283746287346

router.get('/', obtenerUsers);
router.get('/:id', [check('id', 'Su id de mongo no es vAlido').isMongoId()], obtenerUser);
router.post('/', [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,
], crearUser);
router.put('/:id', actualizarUser);
router.delete('/:id', [check('id', 'No es vAlido este id').isMongoId()], borrarUser);

module.exports = router;
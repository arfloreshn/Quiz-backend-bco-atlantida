var express = require('express');
var router = express.Router();

const catProfesionesController = require('../controllers/cat_profesion-cotroller')

router.get('/', catProfesionesController.listar);
router.post('/', catProfesionesController.crear);
router.get('/:id', catProfesionesController.buscar);
router.put('/:id', catProfesionesController.editar);
router.delete('/:id', catProfesionesController.borrar);

module.exports = router;
var express = require('express');
var router = express.Router();

const catPuestosController = require('../controllers/cat_puestos-controller')

router.get('/', catPuestosController.listar);
router.post('/', catPuestosController.crear);
router.get('/:id', catPuestosController.buscar);
router.put('/:id', catPuestosController.editar);
router.delete('/:id', catPuestosController.borrar);

module.exports = router;
var express = require('express');
var router = express.Router();

const catEstadosController = require('../controllers/cat_estados-controller')

router.get('/', catEstadosController.listar);
router.post('/', catEstadosController.crear);
router.get('/:id', catEstadosController.buscar);
router.put('/:id', catEstadosController.editar);
router.delete('/:id', catEstadosController.borrar);

module.exports = router;
var express = require('express');
var router = express.Router();

const catAreaController = require('../controllers/cat_area-controller')

router.get('/', catAreaController.listar);
router.post('/', catAreaController.crear);
router.get('/:id', catAreaController.buscar);
router.put('/:id', catAreaController.editar);
router.delete('/:id', catAreaController.borrar);

module.exports = router;
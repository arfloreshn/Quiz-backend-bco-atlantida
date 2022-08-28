var express = require('express');
var router = express.Router();

const maeEmpleadosController = require('../controllers/mae_empleados-controller')

router.get('/', maeEmpleadosController.listar);
router.post('/', maeEmpleadosController.crear);
router.get('/:id', maeEmpleadosController.buscar);
router.put('/:id', maeEmpleadosController.editar);
router.delete('/:id', maeEmpleadosController.borrar);

module.exports = router;
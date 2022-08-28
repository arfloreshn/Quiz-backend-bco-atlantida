const {
  catAreas
} = require('../models')


//Publicamos la lista de todas las areas
function listar(req, res) {

  //Consumimos el metodo findAll del ORM Secelenzi
  catAreas.findAll({
      attributes: ['areaId', 'descripcion'],
      raw: true
    })
    .then((respuesta) => {
      return res.status(200).json(respuesta)
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      return res.status(400).json(error)
    });
}

//Publicamos el metodo de crear areas
function crear(req, res) {

  catAreas.create({
      descripcion: req.body.descripcion
    })
    .then((respuesta) => {
      return res.status(200).json(respuesta)
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}


//Publicamos el metodo de buscar un registro
function buscar(req, res) {

  //Consumimos el metodo de buscar del ORM Sequelenci
  catAreas.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({
          message: 'Codigo de area no encontrado'
        });
      }

      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}

//Publicamos el metodo de actua
function editar(req, res) {

  const areaId = req.params.id;

  //Consumimos el metodo de buscar del ORM Sequelenci
  catAreas.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({
          message: 'Codigo de area no encontrado'
        });
      }

      return catAreas.update(req.body, {
          where: {
            areaId: areaId
          }
        })
        .then((respuesta) => {
          return res.status(200).json(respuesta)
        })
        .catch((error) => {
          return res.status(400).json(error)
        });
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}

function borrar(req, res) {

  const areaId = req.params.id;

  catAreas.findById(req.params.id)
    .then((estado) => {
      if (!estado) {
        return res.status(400).json({
          message: 'Codigo de area no encontrado'
        });
      }

      return catAreas.destroy({
          where: {
            areaId: areaId
          }
        })
        .then((resultado) => {
          return res.status(200).json(resultado)
        })
        .catch((error) => {
          return res.status(400).json(error)
        });
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}

module.exports = {
  listar,
  crear,
  buscar,
  editar,
  borrar
}
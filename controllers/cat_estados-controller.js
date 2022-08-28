const { catEstados } = require('../models')

//Publicamos el metodo de listar todos registros
function listar(req,res) {
 
  catEstados.findAll({ 
    /*
  attributes: ['estadoId', 'descripcion'], raw: true */
})
  .then((respuesta) => {
    return res.status(200).json(respuesta)
  })
  .catch((error) => {
    console.log("ERROR: ", error);
    return res.status(400).json(error)
  });
}

//Publicamos el metodo de crear un registro
function crear(req,res) {
    catEstados.create({
    descripcion: req.body.descripcion
  })
  .then((respuesta) => {
    return res.status(200).json(respuesta)
  })
  .catch((error) => {
    return res.status(400).json(error)
  });
}


//Publicamos el metodo de  buscar un registro
function buscar(req,res) {
catEstados.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: 'Codigo de estado no encontrado' });
      }

      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}


//Publicamos el metodo de actualizar un registro
function editar(req,res) {

  const estadoId = req.params.id;

  // Usamos la funcion de busqueda del orm Sequelize
  catEstados.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: 'El codigo de estado no existe' });
      }

    //Si el codigo del puesto existe entonces consumimos la funcion de actualizar de Sequelize
      return catEstados.update(req.body, {
        where: { estadoId: estadoId }
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

//Publicamos el metodo de borrar un registro
function borrar(req,res) {
    
  const estadoId = req.params.id;

  //Buscamos el codigo del estado con el orm Sequelize
  catEstados.findById(req.params.id)
    .then((estado) => {
      if (!estado) {
        return res.status(400).json({ message: 'El codigo de estado no existe' });
      }

    //Si el codigo del estado existe entonces consumimos la funcion de borrar de Sequelize
      return estado.destroy({
        where: { estadoId: estadoId }
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

module.exports = { listar, crear, buscar, editar, borrar }
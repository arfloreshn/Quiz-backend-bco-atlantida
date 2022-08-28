const { catPuestos } = require("../models");

//Lista todos los registros
function listar(req, res) {

  //Consumimos la funcion de buscar todo de Sequelize
  catPuestos
    .findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
    .then((respuesta) => {
      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      return res.status(400).json(error);
    });
}

//Publicamos el metodo crear
function crear(req, res) {
  
  //Consumimos la funcion de crear de Sequelize
  catPuestos
    .create({
      descripcion: req.body.descripcion,
    })
    .then((respuesta) => {
      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

//Publicamos el metodo buscar
function buscar(req, res) {
  //Consumimos la funcion de busqueda de Sequelize
  catPuestos
    .findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: "Puesto no encontrado" });
      }

      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

//Publicamos el metodo de actualizar
function editar(req, res) {
  const puestoId = req.params.id;
  //Consumimos la funcion de busqueda de Sequelize, para validar que exista el registro
  catPuestos
    .findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: "Puesto no encontrado" });
      }

       //Si el codigo del puesto existe entonces consumimos la funcion de actualizar de Sequelize
      return catPuestos.update(req.body, {
        where: { puestoId: puestoId }
         })
        .then((respuesta) => {
          return res.status(200).json(respuesta);
        })
        .catch((error) => {
          return res.status(400).json("Error de actualizacion -> " + error);
        });
    })
    .catch((error) => {
      return res.status(400).json("Error de busqueda -> " + error);
    });
}

//Publicamos el metodo de borrar
function borrar(req, res) {
 
  const puestoId = req.params.id;

  //Consumimos la funcion de busqueda de Sequelize, para validar si el puesto existe o no existe
  catPuestos
    .findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(400).json({ message: "Puesto no encontrado" });
      }

     //Si el puesto existe, entonces consumimos la funcion de borrar de Sequelize
      return respuesta
        .destroy( {
          where: { puestoId: puestoId }
           })
        .then((respuesta) => {
          return res.status(200).json(respuesta);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

module.exports = { listar, crear, buscar, editar, borrar };

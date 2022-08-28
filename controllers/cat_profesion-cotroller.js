const { catProfesion } = require('../models')


function listar(req,res) {
  catProfesion.findAll({ 
/*
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }*/
  })
  .then((respuesta) => {
    return res.status(200).json(respuesta)
  })
  .catch((error) => {
    console.log("ERROR: ", error);
    return res.status(400).json(error)
  });
}


function crear(req,res) {
    catProfesion.create({
    descripcion: req.body.descripcion
  })
  .then((respuesta) => {
    return res.status(200).json(respuesta)
  })
  .catch((error) => {
    return res.status(400).json(error)
  });
}

function buscar(req,res) {
    catProfesion.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: 'Profesion no encontrada' });
      }

      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}

function editar(req,res) {

  const profesionId = req.params.id;

    catProfesion.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({ message: 'Profesion no encontrada' });
      }

      return catProfesion.update(req.body, {
        where: { profesionId: profesionId }
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

function borrar(req,res) {
  
  const profesionId = req.params.id;

  catProfesion.findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(400).json({ message: 'Profesion no encontrada' });
      }

      return respuesta.destroy({
        where: { profesionId: profesionId }
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
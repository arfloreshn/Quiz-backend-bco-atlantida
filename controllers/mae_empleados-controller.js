const {
  catPuestos,
  catProfesion,
  catEstados,
  catAreas,
  empleadomae,
} = require("../models");



function listar(req, res) {
  empleadomae
    .findAll({
      include: [{
          model: catAreas,
          //attributes: ["descripcion","areaId"],
          required: false, //Si esta false hace un left join
          raw: true,
        },
        {
          model: catProfesion,
          //attributes: ["descripcion","profesionId"],
          required: true, //Si esta false hace un left join
          raw: true,
        },
        {
          model: catPuestos,
          as: 'catPuestos',
          //attributes: ["descripcion","puestoId"],
          required: true, //Si esta false hace un left join
        },
        {
          model: catEstados,
          as: 'catEstados',
          //attributes: ["descripcion","estadoID"],
          required: true, //Si esta false hace un left join
          raw: true,
        },
      ],

      order: [
        ['empleadoID', 'ASC'],
      ],
      //raw: true, muestra todo en un solo array

      attributes: {
        exclude: ["profesionId",
          "areaId",
          "puestoId",
          "estadoId"
        ], // Omite estos campos en la tabla de empleados
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




function crear(req, res) {

  empleadomae
    .create({
      empleadoID: null,
      fecIngreso: req.body.fecIngreso,
      dni: req.body.dni,
      nombres: req.body.nombres,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      codempleado: req.body.codempleado,
      impSalario: req.body.impSalario,
      profesionId: req.body.catProfesion.profesionId,
      puestoId: req.body.catPuestos.puestoId,
      areaId: req.body.catArea.areaId,
      estadoId: req.body.catEstados.estadoId,
    })
    .then((respuesta) => {


      return res.status(200).json({
        empleadoID: respuesta.empleadoID,
        nombres: respuesta.nombres,
        primerApellido: respuesta.primerApellido,
        segundoApellido: respuesta.segundoApellido,
        codempleado: respuesta.codempleado,
        impSalario: respuesta.impSalario
      });


      //Aqui termina la respuesta 
    })


    //Aqui no hay que tocar

    .catch((error) => {
      return res.status(400).json(error);
    });

}

function buscar(req, res) {
  empleadomae
    .findById(req.params.id, {
        include: [{
            model: catAreas,
            //attributes: ["descripcion","areaId"],
            required: false, //Si esta false hace un left join
            raw: true,
          },
          {
            model: catProfesion,
            //attributes: ["descripcion","profesionId"],
            required: true, //Si esta false hace un left join
            raw: true,
          },
          {
            model: catPuestos,
            as: 'catPuestos',
            //attributes: ["descripcion","puestoId"],
            required: true, //Si esta false hace un left join
          },
          {
            model: catEstados,
            as: 'catEstados',
            //attributes: ["descripcion","estadoID"],
            required: true, //Si esta false hace un left join
            raw: true,
          },
        ],
        //raw: true, muestra todo en un solo array

        attributes: {
          exclude: ["profesionId",
            "areaId",
            "puestoId",
            "estadoId"
          ], // Omite estos campos en la tabla de empleados
        },

      },

    )
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({
          message: "El codigo de empleado no existe"
        });
      }

      return res.status(200).json(respuesta);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function editar(req, res) {
  const empleadoID = req.params.id;


  const empleado = {
    fecIngreso: req.body.fecIngreso,
    dni: req.body.dni,
    nombres: req.body.nombres,
    primerApellido: req.body.primerApellido,
    segundoApellido: req.body.segundoApellido,
    codempleado: req.body.codempleado,
    impSalario: req.body.impSalario,
    profesionId: req.body.catProfesion.profesionId,
    puestoId: req.body.catPuestos.puestoId,
    estadoId: req.body.catEstados.estadoId,
    areaId: req.body.catArea.areaId
  }

  empleadomae
    .findById(empleadoID)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(404).json({
          message: "El codigo de empleado no existe"
        });
      }

      return empleadomae
        .update(empleado, {
          where: {
            empleadoID: empleadoID
          }
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

function borrar(req, res) {

  empleadomae
    .findById(req.params.id)
    .then((respuesta) => {
      if (!respuesta) {
        return res.status(400).json({
          message: "El codigo de empleado no existe"
        });
      }

      return respuesta
        .destroy({
          where: {
            empleadoID: req.params.id
          }
        })
        .then((resultado) => {
          return res.status(200).json(resultado);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

module.exports = {
  listar,
  crear,
  buscar,
  editar,
  borrar
};
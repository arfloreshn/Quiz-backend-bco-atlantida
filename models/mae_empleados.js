"use strict";
module.exports = (sequelize, DataTypes) => {
  const empleadomae = sequelize.define(
    "empleadomae", {
      empleadoID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fecIngreso: {
        type: DataTypes.DATE,
        field: "fec_ingreso"
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombres: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      primerApellido: {
        type: DataTypes.STRING,
        field: "primer_apellido",
        allowNull: false,
      },
      segundoApellido: {
        type: DataTypes.STRING,
        field: "segundo_apellido",
        allowNull: false,
      },
      codempleado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      impSalario: {
        type: DataTypes.DECIMAL,
        field: "imp_salario"
      },
      profesionId: {
        type: DataTypes.INTEGER,
        field: "profesionID"
      },
      puestoId: {
        type: DataTypes.INTEGER,
        field: "puestoID"
      },
      estadoId: {
        type: DataTypes.INTEGER,
        field: "estadoID"
      },
      areaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'catArea',
          key: 'areaId'
        },
        field: "areaID"
      }
    },

    {
      tableName: "empleadomae",
      modelName: "empleadomae",
      createdAt: false,
      updatedAt: false,
    }, {
      paranoid: true,
    }
  );

  //Relacion con el catalogo de puestos
  empleadomae.associate = (models) => {


    empleadomae.belongsTo(models.catAreas, {
      foreignKey: 'areaId',
      targetKey: 'areaId'
    });

    empleadomae.belongsTo(models.catEstados, {
      as: 'catEstados',
      foreignKey: 'estadoId',
      targetKey: 'estadoId'
    });

    empleadomae.belongsTo(models.catProfesion, {
      foreignKey: 'profesionId',
      targetKey: 'profesionId'
    });

    empleadomae.belongsTo(models.catPuestos, {
      as: 'catPuestos',
      foreignKey: 'puestoId',
      targetKey: 'puestoId'
    });


  }
  return empleadomae;

};
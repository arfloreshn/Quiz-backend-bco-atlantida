"use strict";
module.exports = (sequelize, DataTypes) => {
  const catPuestos = sequelize.define(
    "catPuestos", {
      puestoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      tableName: "cat_puestos",
      modelName: "catPuestos",
      timestamps: false,
      createdAt: false,
      updatedAt: false
    },

    {
      paranoid: false,
    }
  );


  catPuestos.associate = (models) => {
    catPuestos.hasMany(models.empleadomae, {
      foreignKey: 'puestoId'
    });
  };

  return catPuestos;
};
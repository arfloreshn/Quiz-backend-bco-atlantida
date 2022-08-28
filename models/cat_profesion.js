"use strict";
module.exports = (sequelize, DataTypes) => {
  const catProfesion = sequelize.define(
    "catProfesion", {
      profesionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: "cat_profesion",
      modelName: "catProfesion",
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }, {
      paranoid: true,
    }
  );

  catProfesion.associate = (models) => {
    catProfesion.hasMany(models.empleadomae, {
      foreignKey: 'profesionId'
    });
  };

  return catProfesion;
};
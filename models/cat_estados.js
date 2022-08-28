'use strict';
module.exports = (sequelize, DataTypes) => {
  const catEstados = sequelize.define('catEstados', {
    estadoId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cat_estados',
    modelName: 'catEstados',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });



  catEstados.associate = (models) => {
    catEstados.hasMany(models.empleadomae, {
      foreignKey: 'estadoId'
    });
  };

  return catEstados;
}
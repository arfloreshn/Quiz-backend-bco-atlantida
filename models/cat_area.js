'use strict';

module.exports = (sequelize, DataTypes) => {
  const catAreas = sequelize.define('catAreas', {
    areaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cat_area',
    modelName: 'catAreas',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });




  catAreas.associate = (models) => {
    catAreas.hasMany(models.empleadomae, {
      foreignKey: 'areaId'
    });
  };


  return catAreas;
}
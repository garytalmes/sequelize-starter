const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Club extends Model {}

Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    discount: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'club'
  }
);

module.exports = Club;

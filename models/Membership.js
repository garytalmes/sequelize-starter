const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Membership extends Model {}

Membership.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'id'
      }
    },

    club_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'club',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'membership'
  }
);

module.exports = Membership;

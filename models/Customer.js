const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    hooks: {
      beforeCreate: async(customerData) => {
        customerData.password = await bcrypt.hash(customerData.password, 10);
        return customerData;
      },
      beforeUpdate: async(customerData) => {
        if( customerData.password ){
          customerData.password = await bcrypt.hash(customerData.password, 10);
          return customerData;
        }
      },
    },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'customer'
  }
);

module.exports = Customer;

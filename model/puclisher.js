const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const book = require('../model/book.js')
const category = require('../model/category.js')

class publisher extends Model {}



publisher.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publisher_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'publisher',
  }
);

module.exports = publisher;
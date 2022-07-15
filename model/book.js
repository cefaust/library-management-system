const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

Books.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          ISBN: {
            type: DataTypes.INTEGER,
          },
          stock: {
            type: DataTypes.BOOLEAN,
            // figure out how to include ammount
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },                                                                                                                        
          catergory: {
            type: DataTypes.STRING,
            references: {
                model: 'categories',
                key: 'id',
              },
          },
          comments: {
            type: DataTypes.STRING,
          },   
    }
);


module.exports = Books;

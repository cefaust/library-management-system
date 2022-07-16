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
          category: {
            type: DataTypes.INT,
            references: {
                model: 'categories',
                key: 'id',
              },
          },
          author: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          publisher: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'books',   
    }
);


module.exports = Books;

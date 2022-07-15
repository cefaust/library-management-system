const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Books = require('./Books');

class Checkout extends Model {}
// test
Checkout.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,  
        },
        user_id: {
            type: DataTypes.INT,
            references: {
                model: 'user',
                key: 'id',
            } ,             
        },
        book_id: {
            type: DataTypes.INT,
            references: {
                model: 'books',
                key: 'id',
              },
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          checkoutDate: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          returnDate: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          fine: {
            type: DataTypes.INT,
            allowNull: false,
          },
          },

       

);

module.exports = Checkout;
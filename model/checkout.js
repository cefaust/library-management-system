const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Books = require('./Books');

class Checkout extends Model {}

Checkout.init (
    {
        // id referencing books
        // and title
//-----------------------------------
    // returnDate
    // checkoutDate
//-----------------------------------
    // fine
    // ammount

    }
)


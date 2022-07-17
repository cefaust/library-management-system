const User = require('./user');
const Book = require('./book');
const Categories = require('./categories');
const Checkout = require('./checkout');

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Book.belongsTo(User, {
    foreignKey: 'user_id'
  });

 Categories.hasMany(Book, {
    foreignKey: 'categories_id'
    });

 Book.belongsTo(Categories, {
    foreignKey: 'categories_id'
  });

 Book.belongsToMany(User, {
    through: 'Checkout'
  });

  User.belongsToMany(Book, {
    through: 'Checkout'
  })



  module.exports = { User, Book, Categories };
  

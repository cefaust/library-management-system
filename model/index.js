const User = require('./User');
const Books = require('./Books');

User.hasMany(Books, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Books.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Books };
  

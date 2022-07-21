const sequelize = require('../config/connection');
const { User, Book, Categories } = require('../model');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const categoriesData = require('./categoriesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Categories.bulkCreate(categoriesData);

  await Book.bulkCreate(bookData);

  process.exit(0);
};

seedDatabase();

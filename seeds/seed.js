const sequelize = require('../config/connection');
const { User, Books, Categories } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const categoriesData = require('./categoriesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await  Books.bulkCreate(bookData);

  await Categories.bulkCreate(categoriesData);

  process.exit(0);
};

seedDatabase();

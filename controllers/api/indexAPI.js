const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const userRoutes = require('./userRoutes');
const checkoutRoutes = require('./checkoutRoutes');
const publisherRoutes = require('./publisherRoutes');

router.use('/books', bookRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', userRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/publishers', publisherRoutes);

module.exports = router;
const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const userRoutes = require('./userRoutes');
// const checkoutRoutes = require('./checkoutRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/categories', categoriesRoutes);
router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
// router.use('/book', bookRoutes);
// router.use('/checkout', checkoutRoutes);


module.exports = router;

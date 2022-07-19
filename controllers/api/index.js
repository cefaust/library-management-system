const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const userRoutes = require('./userRoutes');
// const checkoutRoutes = require('./checkoutRoutes');

router.use('/categories', categoriesRoutes);
router.use('/users', userRoutes);
// router.use('/book', bookRoutes);
// router.use('/checkout', checkoutRoutes);


module.exports = router;

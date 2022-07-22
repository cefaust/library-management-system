const router = require('express').Router();
const { User, Checkout } = require('../../model')
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {

    const newCheckoutBook = await Checkout.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newCheckoutBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const checkedOutBookData = Checkout.destroy( {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!checkedOutBookData) {
      res.status(404).json({message: 'No project found with this id'});
      return;
    }

    res.status(2300).json(checkedOutBookData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
      console.log(userData);

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

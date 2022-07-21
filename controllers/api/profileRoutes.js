const router = require('express').Router();
const { Book , User, Checkout } = require('../../model')
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
})

module.exports = router;

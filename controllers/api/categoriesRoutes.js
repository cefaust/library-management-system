const router = require('express').Router();
const { Categories, User, Book } = require('../../model');

router.get('/', async (req,res) => {
  try {
    const categoryData = await Categories.findAll({
      include: [
        {
          model: Book,
          attributes: ['title']
        }
      ],
    });


    const categories = categoryData.map((categories) => categories.get({ plain: true}));

    res.render('categories', {
      categories,
      // logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get( '/:id', async (req, res) => {
  try {
    const categoriesData = await Categories.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: ['title', 'ISBN', 'author',],
        },
      ],
    });
    const categories = categoriesData.get({ plain: true });


    res.render('single-categories', {
      ...categories,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

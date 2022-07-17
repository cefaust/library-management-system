const router = require('express').Router();
const { User, Book, Categories} = require('../model');

router.get('/', async (req,res) => {
  try {
    const bookData = await Book.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Categories,
          attributes: [ 'id', 'category_name' ]
        }
      ],

    });

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render('homepage', {
      books,
      logged_in: req.session. logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Categories,
          attributes: ['category_name'],
        },
      ],
    });

    // res.status(200).json(bookData);

    const book = bookData.get({ plain: true });

    res.render('book', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;

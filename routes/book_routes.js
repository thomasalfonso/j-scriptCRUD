const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book_controller');

router.get('/', BookController.index);
router.post('/', BookController.create);

router.get('/new', BookController.make);

router.get('/:id', BookController.show);
router.put('/:id', BookController.put);
router.delete('/:id', BookController.destroy);

router.get('/update/:id', BookController.update);



module.exports = router
const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author_controller');

router.get('/', AuthorController.index)

router.post('/', AuthorController.create)

router.get('/new', AuthorController.make)

// Show is the name chosen because of rails naming convention. We could choose anything
// The ":" indicates there is a variable or wild card coming into the route
// What we put after the ":" will be made avalible under params in the controller
router.get('/:id', AuthorController.show)

router.delete('/:id', AuthorController.destroy)

router.get('/update/:id', AuthorController.update)

router.put('/:id', AuthorController.put)

module.exports = router

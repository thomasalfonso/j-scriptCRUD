const mongoose = require('mongoose');
const bookSchema = require('../schemas/book_schema')

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;
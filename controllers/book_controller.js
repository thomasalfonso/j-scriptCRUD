const bookModel = require('../database/models/book_model')

async function index (req, res) {
    let books = await bookModel.find()
    res.render('book/index', {books})
}

async function show (req, res ){
    let {id} = req.params;
    let book = await bookModel.findById(id)
    console.log(book.name)
    res.render('book/show', {book})
}

function make (req, res){
    res.render('book/new')
}

async function create (req, res) {
    let {name, bio, classification} = req.body;
    await bookModel.create({name, bio, classification})
    res.redirect('/books')
}

async function update(req, res){
    let{id} = req.params;
    let book = await bookModel.findById(id)
    res.render('book/update', {book})
}

async function put(req, res) {
    let {id} = req.params;
    let {name, bio, classification} = req.body;
    await bookModel.findByIdAndUpdate(id, {name,bio,classification});
    res.redirect(`/books/${id}`);
}

async function destroy(req, res) {
    let {id} = req.params;
    await bookModel.findByIdAndDelete(id)
    res.redirect('/books')
}

module.exports = {
    index,
    show,
    make,
    create,
    update,
    put,
    destroy
}
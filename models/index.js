var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booksToReadApp'); 
var User     = require('./user');
var Book     = require('./book');

module.exports.User = User;
module.exports.Book = Book;

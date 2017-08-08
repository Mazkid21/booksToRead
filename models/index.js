var mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
				  'mongodb://localhost/booksToReadApp'); 
var User     = require('./user');
var Book     = require('./book');

module.exports.User = User;
module.exports.Book = Book;

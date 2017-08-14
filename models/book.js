var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookSchema = new Schema({
		
			
			title: [String],
			authors: [String],
			description: [String],
			smallThumbnail: [String]
		
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
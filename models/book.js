var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookSchema = new Schema({
		volumeInfo: {
			id: String,
			title: String,
			authors: [String],
			description: String
		}
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
const request 		= require('request');
const bodyParser 	= require('body-parser');
const env 			= require('../env.js');
const db 			= require('../models');
const passport		= require('passport');



function getBooksFromApi(req, res, next) {

	var url = 'https://www.googleapis.com/books/v1/volumes?q=' +
		req.body.search;



	request(url, function(error, response, body) {
		if (error) return error;

		res.json(body.results);
	});
}
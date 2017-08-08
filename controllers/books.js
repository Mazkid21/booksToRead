'use strict'

const request 		= require('request');
const bodyParser 	= require('body-parser');
const apiKey 		= require('../env.js');
const passport		= require('passport');


const bookSearch = []; //Will add this to the ApiUrl down bellow, need to make this the fourm field. 





function getBooks(req, res, next) {

	const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + req.params + "&key=" + apiKey;

	console.log(apiUrl);

	var queryArray = req.name.split(" ");
	var queryString = "";
		queryArray.forEach(function(element, index) {
			queryString += element;
			if (index < queryArray.length -1)
				queryString += '+';
		});

		//apiUrl += queryString;

	request(apiUrl, function (error, response, body) {

		var bodyObject = JSON.parse(body);
		console.log("Body object: " + bodyObject);
	});
}

module.exports.getBooks = getBooks;
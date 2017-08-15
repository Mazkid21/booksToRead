var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var books     	= require('./controllers/books.js');
var db        =require('./models');

// Setting up the server 

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

// Setting up ejs as the view engine
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// throwing up the public folder to be viewed
app.use(express.static(__dirname + '/public'));

// getting passport set up
app.use(session({ secret: 'BOOKS-TO-READ-APP' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

// require passport
require('./config/passport')(passport);
// making sure user is logged in
app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

// setting up the routes with routes folder
var routes = require('./config/routes');
app.use(routes);

// From google movie hw, should help with getting data from api to backend
// var twoBooks = ["dan brown", "shantaram"];
// twoBooks.forEach(function(film){
// 	books(film);
// });


// setting up port to listen on
app.listen(process.env.PORT || 3000);
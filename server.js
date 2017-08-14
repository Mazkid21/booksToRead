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



app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'BOOKS-TO-READ-APP' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});


var routes = require('./config/routes');
app.use(routes);

// From google movie hw, should help with getting data from api to backend
// var twoBooks = ["dan brown", "shantaram"];
// twoBooks.forEach(function(film){
// 	books(film);
// });



app.listen(process.env.PORT || 3000);
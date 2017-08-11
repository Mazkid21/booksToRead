var passport = require("passport")

// GET /signup
function getSignup(request, response, next) {
	response.render('signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response, next) {
	//save a new user 
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/secret',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) { 
	response.render('login.ejs', { message: request.flash('loginMessage') });
}

// POST /login 
function postLogin(request, response, next) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/secret',
		failureRedirect: '/login',
		failureFlash: true
	});

	return loginStrategy(request, response, next);
}

// GET /logout
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/');
}

// Restricted page
function secret(request, response){
	var userId = request.params.id;

	response.render('secret.ejs');
}

// Saves book info to user 
function saveBook(request, response, next) {
	console.log('Save book controller/users.js');
	var id = request.params.id;
	dbUser.findById(id)
	.exec(function(err, foundUser) {
		console.log(foundUser.books);
		response.JSON(foundUser.books);
	});

}

function postsavedBook(request, response, next) {
	console.log('postsavedBook controller/users.js');
	var id = request.params.id;
	dbUser.findById(id)
	.exec(function(err, foundUser){
		console.log(foundUser);
		foundUser.books.push({itle: request.body.title,
			authors: request.body.authors,
			description: request.body.description});
		foundUser.save(function(err){
			response.json(foundUser);
		});

	});
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret,
  saveBook: saveBook,
  postsavedBook: postsavedBook
};
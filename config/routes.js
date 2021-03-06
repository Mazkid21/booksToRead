var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var booksController = require('../controllers/books');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
	//if the user is authenticated, then we continue the executionl
	if (req.isAuthenticated()) return next();

	//otherwise the request is always redirected to the homepage
	res.redirect('/');
}

router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)

 router.route("/secret")
 	.get(authenticatedUser, usersController.secret);

  router.route("/userBooks")
    .get(authenticatedUser, usersController.userBooks)
    

   router.route("/secret/:id/books")
    .get(usersController.saveBook)
    .post(usersController.postsavedBook);
 
 router.route("/userBooks/:id/books")
 .delete(authenticatedUser, usersController.deleteBook);

   

module.exports = router
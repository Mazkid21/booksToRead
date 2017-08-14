app.get('/userBooks', function (req, res) {
  // send all books as JSON response
  db.Users.find()
    .exec(function(err, books) {
      if (err) { return console.log("index error: " + err); }
      res.json(books);
  });
});


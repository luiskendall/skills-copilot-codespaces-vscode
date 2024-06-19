// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Read the comments from the file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create a route for the comments
app.get('/comments', function (req, res) {
  res.json(comments);
});

// Create a route to add a new comment
app.post('/comments', function (req, res) {
  var comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comment);
});

// Create a route to delete a comment
app.delete('/comments/:id', function (req, res) {
  var id = req.params.id;
  comments = comments.filter(function (comment) {
    return comment.id !== id;
  });
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json({status: 'ok'});
});

// Start the server
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
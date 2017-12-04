var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/secret', function (req, res) {
  res.send('All request to the homepage');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
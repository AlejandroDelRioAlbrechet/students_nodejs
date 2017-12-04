var mysql = require('mysql');

var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "192.168.99.100",
  port: 32773,
  user: "root",
  password: "root",
  database: 'students_nodejs'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('SELECT * from Studets', function (error, results, fields) {
  if (error) throw error;

  results.map(function (row) {
    console.log(row);
  });
});

app.get('/students', function (req, res) {
  con.query('SELECT * from Studets', function (error, results, fields) {
    if (error) throw error;

    con.query('INSERT INTO entries SET ?', { timestamp: new Date().getTime() }, function (error, results, fields) {
      if (error) throw error;
      console.log(results.insertId);
    });
    res.send(results);
  });
});

app.get('/last_students_access', function (req, res) {
  con.query('SELECT * from entries', function (error, results, fields) {
    if (error) throw error;
    res.send(new Date(results[results.length - 1].timestamp).toISOString());
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

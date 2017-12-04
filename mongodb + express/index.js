var MongoClient = require('mongodb').MongoClient;

var express = require('express');
var app = express();

var url = 'mongodb://192.168.99.100:32774/students_nodejs';
MongoClient.connect(url, function(err, db) {
  db.collection('Students').find({}).toArray(function(err, students) {
    console.log(students);
  });

  app.get('/students', function (req, res) {
    var collection = db.collection('entries');
    collection.insertMany([
      { timeStamp: new Date().getTime() }
    ]);
    db.collection('Students').find({}).toArray(function(err, students) {
      res.send(students);
    });
  });

  app.get('/last_students_access', function (req, res) {
    db.collection('entries').find({}).toArray(function(err, results) {
      res.send(new Date(results[results.length - 1].timeStamp).toISOString());
    });
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
});

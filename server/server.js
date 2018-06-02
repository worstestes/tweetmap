const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database');
const Twit = require('../database/database')

var app = express();

app.use(express.static(__dirname + '/../client/dist/'));

//Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next){
  if (req.method === 'POST') {
    console.log(`POSTING to ${req.url} with ${JSON.stringify(req.body)}`);
  } else if (req.method === 'GET') {
    console.log(`GETTING ${req.url}`);
  } else if (req.method === 'PUT') {
    console.log(`PUTTING to ${req.url} with ${JSON.stringify(req.body)}`);
  } else {
    console.error('ERROR with server call');
  }
  next();
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database');

var app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());

app.get('/tweetdata', (req, res) => {
  console.log('GET request for tweet data');
  //db Call
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
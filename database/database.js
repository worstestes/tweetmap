const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let mongoPath = process.env.MONGODB_URI || 'mongodb://ohzone:0hzone@ds253879.mlab.com:53879/teamtwit';
mongoose.connect(mongoPath);
let db = mongoose.connection;
let Schema = mongoose.Schema;
let sw = require('stopword');
let _ = require('underscore');
let bodyParser = require('body-parser')
let rp = require('remove-punctuation');
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() { console.log('Connection Established.') });

let data = mongoose.model('Twitdata', 
  new Schema({ state: String, text: String}), 'twitdata');

const tweetArr = [];
data.find().exec().then((tweets) => {
  for(let tweet of tweets) {
    const newTweetData = {};
    let tweetText = tweet.text.split(' ');
    let newTweetText = sw.removeStopwords(tweetText);

    newTweetData.state = tweet.state;
    newTweetData.text = newTweetText;
    tweetArr.push(newTweetData);
  }

  let final = [];
  for(let tweet of tweetArr) {
    final.push(tweet.text);
  }

  final = _.flatten(final);

  let test = [];
  for(let word of final) {
    test.push(word.toLowerCase());
  }

  let desired = test.filter((word) => word !== '');

  var frequencies = desired.reduce(function(acc, word) {
    acc[word] = (acc[word] + 1) || 1;
    return acc;
}, {});


var mostFrequentWord = Object.keys(frequencies)
  .reduce(function(highest, current) {
    return frequencies[highest] > frequencies[current] ? highest : current;
  }, "");

  console.log(mostFrequentWord);


  });
      
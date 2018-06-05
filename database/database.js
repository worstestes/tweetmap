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
db.once('open', function () { console.log('Connection Established.') });

let stateTweet = mongoose.model('StateTweet',
  new Schema({ state: String, text: String }),
  'StateTweets');
  
const nationalTrends = mongoose.model('NationalTrend',
  new Schema({ trend: String, rank: Number, date: String }),
  'NationalTrends');

const tweetArr = [];
stateTweet.find().exec().then((tweets) => {
  for (let tweet of tweets) {
    const newTweetData = {};
    let tweetText = tweet.text.split(' ');
    let newTweetText = sw.removeStopwords(tweetText);

    newTweetData.state = tweet.state;
    newTweetData.text = newTweetText;
    tweetArr.push(newTweetData);
  }

  let final = [];
  for (let tweet of tweetArr) {
    final.push(tweet.text);
  }

  final = _.flatten(final);

  let test = [];
  for (let word of final) {
    test.push(word.toLowerCase());
  }
  let desired = test.filter((word) => word !== '');

  var frequencies = desired.reduce(function (acc, word) {
    acc[word] = (acc[word] + 1) || 1;
    return acc;
  }, {});


  var mostFrequentWord = Object.keys(frequencies)
    .reduce(function (highest, current) {
      return frequencies[highest] > frequencies[current] ? highest : current;
    }, "");

  console.log(mostFrequentWord);


});

const getNationalTrends = async () => {
  let res = await nationalTrends
    .find({rank: {$lte: 10}})
    .select('trend');

  return res;
};

const getStatePercentages = async (keyword) => {
  let percents = await stateTweet
    .aggregate([
      {
        $group: {
          _id: "$state",
          state: {$first: "$state"},
          totalCount: {$sum: 1},
          text: {$push: "$$ROOT.text"}
        }
      }, {
        $unwind: "$text"
      }, {
        $match: {
          "text": {"$regex": keyword.word, "$options": "i"}
        }
      }, {
        $group: {
          _id: "$state",
          state: {$first: "$state"},
          totalCount: {$first: "$totalCount"},
          matchCount: {$sum: 1}
        }
      }, {
        $project: {
          _id: 0,
          state: 1,
          percent: {$multiply: [{$divide: ["$matchCount", "$totalCount"]}, 100]}
        }
      }
    ]);
    
  percents = percents.map((state) => {
    return {
      state: state.state,
      percent: Math.round(state.percent * 100) / 100
    }
  });

  console.log(percents);
}

module.exports.getNationalTrends = getNationalTrends;
module.exports.getStatePercentages = getStatePercentages;
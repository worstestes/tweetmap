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

let StateTweets = mongoose.model('StateTweets',
  new Schema({ state: String, text: String }), 'StateTweets');
  
  let tweetSchema = mongoose.Schema({
    state: String,
    keywords: Schema.Types.Mixed,
  }, { versionKey: false });


  var Twit = mongoose.model('Twit', tweetSchema);

  let data = mongoose.model('Twitdata',
  new Schema({ state: String, text: String }), 'twitdata');

  const states = [
    "AL", 
    "AK", 
    "AZ", 
    "AR", 
    "CA", 
    "CO", 
    "CT", 
    "DE", 
    "DC", 
    "FL", 
    "GA", 
    "HI", 
    "ID", 
    "IL", 
    "IN",  
    "IA", 
    "KS", 
    "KY", 
    "LA", 
    "ME", 
    "MD", 
    "MA", 
    "MI", 
    "MN", 
    "MS", 
    "MO", 
    "MT", 
    "NE", 
    "NV", 
    "NH", 
    "NJ", 
    "NM", 
    "NY", 
    "NC",  
    "ND",  
    "OH", 
    "OK", 
    "OR", 
    "PA", 
    "RI", 
    "SC", 
    "SD", 
    "TN", 
    "TX",  
    "UT", 
    "VT", 
    "VA", 
    "WA", 
    "WV", 
    "WI", 
    "WY", 
  ]


let totalTweetArray = [];

StateTweets.find().exec().then((res) => {
  for(let doc of res) {
    let message = doc.text.split(' ');
    for(let state of states) {
    if(doc.state === state) {
      let obj = {};
      let message = doc.text.split(' ');
      let keywordCollection = sw.removeStopwords(message);
      let keyword = keywordCollection.map((word) => {
        word = rp(word).toLowerCase();
        if(typeof word === "string" && typeof word !== "undefined" && word !== "" && word !== "-") {
          return word;
        }
      })
        let stateKeyWords = _.countBy(keyword);
        obj.state = state;
        obj.keywords = [stateKeyWords];
        totalTweetArray.push(obj);
      }
      
    }
  }


  let fiftyplusstates = [];
  for(let state of states) {
    let stateObj = {};
    let stateName = {}
    let stateList = {};
    stateName.state = state;
    stateObj.state = stateName.state;
    stateObj.keywords = stateList;

    for(let tweet of totalTweetArray) {
      if(tweet.state === state) {
          let stateObj = {};
          stateObj.state = state;
          tweet.keywords.forEach((list) => {
            if(tweet.state === state) {
              let test = Object.assign(stateList, list);
              stateList = test;
            }
          })
        }
      }
      fiftyplusstates.push(stateObj);
    }


    for(let state of fiftyplusstates) {
      var data = new Twit({state: state.state, keywords: state.keywords});
      data.save(function (err) {
        if(err) {console.log("error")};
        console.log("saved");
      });
}




})



    

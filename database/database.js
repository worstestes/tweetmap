const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let mongoPath = process.env.MONGODB_URI || 'mongodb://ohzone:0hzone@ds253879.mlab.com:53879/teamtwit';
mongoose.connect(mongoPath, {
  useMongoClient: true
});

var Twit = mongoose.model('Twit', mongoose.Schema({ state: String, text: String}, { collection : 'twitdata' }));   // collection name;


const save = async () => {
  var variable = new schemaName({
    id: '',
    name: '',
  });
  variable.save()
};

const find = (callback) => {
  collectionName
    .find({})
    .sort('')
    .exec((err, data) => {
      callback(data);
    });
};

module.exports = Twit;
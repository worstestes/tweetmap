const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let mongoPath = process.env.MONGODB_URI || 'mongodb://ohzone:0hzone@ds253879.mlab.com:53879/teamtwit';
mongoose.connect(mongoPath);
let db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() { console.log('Connection Established.') });

let Data = mongoose.model('Twitdata', 
               new Schema({ state: String, text: String}), 
               'twitdata');
               
               
               
// console.log(Data.find().exec((err, res) => {
//   console.log(res);
//     }));

// var map = function() {  
//   var summary = this.message_soup_text;
//   if (summary) { 
//       // quick lowercase to normalize per your requirements
//       summary = summary.toLowerCase().split(" "); 
//       for (var i = summary.length - 1; i >= 0; i--) {
//           // might want to remove punctuation, etc. here
//           if (summary[i])  {      // make sure there's something
//              emit(summary[i], 1); // store a 1 for each word
//           }
//       }
//   }
// };

// var reduce = function( key, values ) {    
//   var count = 0;    
//   values.forEach(function(v) {            
//       count +=v;    
//   });
//   return count;
// }

// full thing
Data.mapReduce(map, reduce, { out: "word_count" })


// > db.word_count.find().sort({value:-1})






const save = async () => {
  var variable = new schemaName({
    id: '',
    name: '',
  });
  variable.save();
};

// const find = (name, callback) => {
//     name
//     .find({})
//     .sort('')
//     .exec((err, data) => {
//       callback(data);
//     });

// }
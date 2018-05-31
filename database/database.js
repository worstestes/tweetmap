const pg = require('pg');
const config = require('./config');

//Setup for Heroku database URL otherwise get connection string from config file
var conString = process.env.DATABASE_URL || config.localPsqlConString;

let client = new pg.Client(conString);
client.connect((err) => {
  if (err) {
    return console.error('ERROR connecting to postgres:', err);
  }
  return console.log('CONNECTED to postgres slidedb!');
});

module.exports = {
    
};
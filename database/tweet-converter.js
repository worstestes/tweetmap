const fs = require('fs');

const acronyms = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FL": "Florida",
  "GA": "Georgia",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PA": "Pennsylvania",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

let tweetArr = fs.readFileSync('./database/tweets.json');
tweetArr = JSON.parse(tweetArr);

const writeStream = fs.createWriteStream('./database/tweets-state.json');
let count = 0;

for (tweet of tweetArr) {
  let state = undefined;
  let stateAcr = '';

  if (tweet.placeType === 'city') {
    stateAcr = tweet.placeFull.slice(tweet.placeFull.length - 2);
    state = acronyms[stateAcr];
  } else if (tweet.placeType === 'admin' && Object.values(acronyms).includes(tweet.placeName)){
    state = tweet.placeName;
  }

  if (state !== undefined) {
    count++;
    let newText = tweet.text.replace(/,/gi, ' ');
    newText = newText.replace(/\n/gi, ' ');
  
    if (count > 1) {
      writeStream.write('\n');
    }

    writeStream.write(JSON.stringify({
      state: state,
      text: newText
    }));
  }
}

writeStream.write('\n')
writeStream.end();
console.log(`Converted ${count} tweets!`);
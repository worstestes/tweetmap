# Tweet Heat #

## Overview ##
  > Tweet Heat is a tool to visualize tweets on a U.S. heat map. When searching or selecting a keyword, the map will highlight based on the percentage of that state's tweets contain the keyword.

## Summary ##
  > There are two main pages: the aforementioned map as well as a table of top keywords extracted from each state's stored tweets.

## Database ##
  > The database at this point is handled manually using a series of files.
  1. tweetsStream.js when run will stream tweets to tweets.json for the setTimeout period used at the end
  2. tweetsState.js will determine the state for each tweet and output an importable file as tweets-state.json
  3. nationalTrends.js will send an API call to get the top 50 national Twitter trends and output them as an importable file as nationalTrends.js
  4. There is a commented out field of database.js that when run will create the collection and insert documents containing the top 10 keywords for each state

## API ##
  > The streaming tweets API requires a user account and the associated keys/tokens for it. The national trends API uses a bearer token which is generated by Twitter for authorization.

## React/Server ##
  > Relatively straightforward for this project outside of the map. A couple server requests directed to the files at the end of database.js.


## Map ##
  > datamap.jsx was mostly copied from https://www.npmjs.com/package/react-datamaps which gives React examples of the datamaps node module. Most map logic is done within map.jsx and then data is passed into datamap.jsx which renders the map to the DOM. Checking out the examples from the link above and tinkering with them is the best way to learn how the map works.

import React from 'react';
import axios from 'axios';

import Table from './table.jsx'

class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateWords: [{
        state: 'Texas',
        keywords: [{word: 'Trump', count: 5}, {word: 'Ambien', count: 10}]
      }, {
        state: 'Florida',
        keywords: [{word: 'Trump', count: 5}, {word: 'Ambien', count: 10}]
      }, {
        state: 'California',
        keywords: [{word: 'Trump', count: 5}, {word: 'Ambien', count: 10}]
      }, {
        state: 'New York',
        keywords: [{word: 'Trump', count: 5}, {word: 'Ambien', count: 10}]
      }, {
        state: 'Idaho',
        keywords: [{word: 'Trump', count: 5}, {word: 'Ambien', count: 10}]
      }]
    };
  }

  render() {
    return(
      <div>
        <h1>Tables Page</h1>
        {this.state.stateWords.map((curState, ind) => {
          return <Table key={ind} ind={ind} state={curState.state} keywords={curState.keywords}/>;
        })}
      </div>
    );
  }
}

export default Tables;
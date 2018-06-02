import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Map from './components/map.jsx'
import Tables from './components/tables.jsx'

class App extends React.Component {

  render() {
    return(
      <div className='App'>
        <h1>Hello, World!</h1>
        <p>Team Twit 4 Lyfe!</p>
        <Map />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
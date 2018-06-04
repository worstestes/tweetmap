import React from 'react';
import axios from 'axios';

import Table from './table.jsx'

class Tables extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Tables Page</h1>
        <p>Tables Below</p>
        <Table />
      </div>
    );
  }
}

export default Tables;
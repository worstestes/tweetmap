import React from 'react';
import axios from 'axios';

class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let pos = this.props.ind % 3;
    let tClass = '';

    switch (pos) {
      case 0:
        tClass = 'tLeft';
        break;
      case 1:
        tClass = 'tMiddle';
        break;
      case 2:
        tClass = 'tRight';
    }

    return(
      <div className={`state-table ${tClass}`}>
        <h3>{this.props.state}</h3>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.props.keywords.map((keyword, ind) => {
              return (
                <tr key={ind}>
                  <td>{keyword.word}</td>
                  <td>{keyword.count}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
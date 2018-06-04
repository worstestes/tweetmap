import React from 'react';

import Datamap from './datamap.jsx';
import Example from './example.jsx';

export default class Map extends React.Component {
  
  constructor() {
	super();
	this.state = {
	  states: {
		AZ: {}, CO: {}, DE: {}, FL: {}, GA: {}, HI: {}, ID: {}, IL: {}, IN: {}, IA: {}, 
		KS: {}, KY: {}, LA: {}, MD: {}, ME: {}, MA: {}, MN: {}, MI: {}, MS: {}, MO: {},
		MT: {}, NC: {}, NE: {}, NV: {}, NH: {}, NJ: {}, NY: {}, ND: {}, NM: {}, OH: {},
		OK: {}, OR: {}, PA: {}, RI: {}, SC: {}, SD: {}, TN: {}, TX: {}, UT: {}, WI: {},
		VA: {}, VT: {}, WA: {}, WV: {}, WY: {}, CA: {}, CT: {}, AK: {}, AR: {}, AL: {}
	  }
	}
  }
  componentWillMount() {
	let testTrends = {
		AZ: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		CO: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		DE: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		FL: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		GA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		HI: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		ID: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		IL: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		IN: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		IA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		KS: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		KY: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		LA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MD: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		ME: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MN: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MI: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MS: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MO: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		MT: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NC: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NE: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NV: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NH: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NJ: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NY: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		ND: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		NM: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		OH: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		OK: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		OR: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		PA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		RI: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		SC: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		SD: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		TN: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		TX: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		UT: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		WI: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		VA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		VT: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		WA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		WV: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		WY: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		CA: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		CT: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		AK: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		AR: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		},
		AL: {
		  trends: [{word: 'trump', count: 180}, {word: 'ambien', count: 170}, {word: 'blake', count: 155}]
		}
	  }
	this.setTrends(testTrends);

	let testPercentages = {
		AZ: {
			fillKey: 'Republican',
		},
		CO: {
			fillKey: 'Light Democrat',
		},
		DE: {
			fillKey: 'Democrat',
		},
		FL: {
			fillKey: 'UNDECIDED'
		},
		GA: {
			fillKey: 'Republican'
		},
		HI: {
			fillKey: 'Democrat'
		},
		ID: {
			fillKey: 'Republican'
		},
		IL: {
			fillKey: 'Democrat'
		},
		IN: {
			fillKey: 'Republican'
		},
		IA: {
			fillKey: 'Light Democrat'
		},
		KS: {
			fillKey: 'Republican'
		},
		KY: {
			fillKey: 'Republican'
		},
		LA: {
			fillKey: 'Republican'
		},
		MD: {
			fillKey: 'Democrat'
		},
		ME: {
			fillKey: 'Democrat'
		},
		MA: {
			fillKey: 'Democrat'
		},
		MN: {
			fillKey: 'Democrat'
		},
		MI: {
			fillKey: 'Democrat'
		},
		MS: {
			fillKey: 'Republican'
		},
		MO: {
			fillKey: 'Republican'
		},
		MT: {
			fillKey: 'Republican'
		},
		NC: {
			fillKey: 'Light Republican'
		},
		NE: {
			fillKey: 'Republican'
		},
		NV: {
			fillKey: 'Heavy Democrat'
		},
		NH: {
			fillKey: 'Light Democrat'
		},
		NJ: {
			fillKey: 'Democrat'
		},
		NY: {
			fillKey: 'Democrat'
		},
		ND: {
			fillKey: 'Republican'
		},
		NM: {
			fillKey: 'Democrat'
		},
		OH: {
			fillKey: 'UNDECIDED'
		},
		OK: {
			fillKey: 'Republican'
		},
		OR: {
			fillKey: 'Democrat'
		},
		PA: {
			fillKey: 'Democrat'
		},
		RI: {
			fillKey: 'Democrat'
		},
		SC: {
			fillKey: 'Republican'
		},
		SD: {
			fillKey: 'Republican'
		},
		TN: {
			fillKey: 'Republican'
		},
		TX: {
			fillKey: 'Republican'
		},
		UT: {
			fillKey: 'Republican'
		},
		WI: {
			fillKey: 'Democrat'
		},
		VA: {
			fillKey: 'Light Democrat'
		},
		VT: {
			fillKey: 'Democrat'
		},
		WA: {
			fillKey: 'Democrat'
		},
		WV: {
			fillKey: 'Republican'
		},
		WY: {
			fillKey: 'Republican'
		},
		CA: {
			fillKey: 'Democrat'
		},
		CT: {
			fillKey: 'Democrat'
		},
		AK: {
			fillKey: 'Republican'
		},
		AR: {
			fillKey: 'Republican'
		},
		AL: {
			fillKey: 'Republican'
		}
	  }
	this.setPercentages(testPercentages);
	setTimeout(() => (console.log(this.state.states)), 0);
  }

  setPercentages(data) {
	let statesCopy = Object.assign({}, this.state.states);
	for (let state in statesCopy) {
	  statesCopy[state].fillKey = data[state].fillKey;
	}
	this.setState({states: statesCopy});
  }

  setTrends(data) {
	let statesCopy = Object.assign({}, this.state.states);
	for (let state in statesCopy) {
	  statesCopy[state].trends = data[state].trends;
	}
	this.setState({states: statesCopy});
  }
  
  render() {
	return (
	  <Example label="USA Heat Map">
	    <Datamap
		  scope="usa"
		  geographyConfig={{
		    highlightBorderColor: '#bada55',
			popupTemplate: (geography, data) =>
			  `<div class='hoverinfo'>${geography.properties.name}\nTrends:\n ${data.trends.map((trend) => {
				  return trend.word + ': ' + trend.count + '\n';
			  })}`,
			    highlightBorderWidth: 3
		  }}
		  fills={{
		    'Republican': '#cc4731',
			'Democrat': '#306596',
			'Heavy Democrat': '#667faf',
			'Light Democrat': '#a9c0de',
			'Heavy Republican': '#ca5e5b',
			'Light Republican': '#eaa9a8',
			'defaultFill': '#eddc4e'
		  }}
		  data={this.state.states}
		labels />
	  </Example>);
	}
}

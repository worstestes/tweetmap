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
			fillKey: .01
		},
		CO: {
			fillKey: .02
		},
		DE: {
			fillKey: .03
		},
		FL: {
			fillKey: .04
		},
		GA: {
			fillKey: .2
		},
		HI: {
			fillKey: .08
		},
		ID: {
			fillKey: .2
		},
		IL: {
			fillKey: .08
		},
		IN: {
			fillKey: .2
		},
		IA: {
			fillKey: .15
		},
		KS: {
			fillKey: .2
		},
		KY: {
			fillKey: .2
		},
		LA: {
			fillKey: .2
		},
		MD: {
			fillKey: .3
		},
		ME: {
			fillKey: .3
		},
		MA: {
			fillKey: .3
		},
		MN: {
			fillKey: .3
		},
		MI: {
			fillKey: .3
		},
		MS: {
			fillKey: .2
		},
		MO: {
			fillKey: .2
		},
		MT: {
			fillKey: .2
		},
		NC: {
			fillKey: .04
		},
		NE: {
			fillKey: .2
		},
		NV: {
			fillKey: .06
		},
		NH: {
			fillKey: .15
		},
		NJ: {
			fillKey: .18
		},
		NY: {
			fillKey: .18
		},
		ND: {
			fillKey: .2
		},
		NM: {
			fillKey: .18
		},
		OH: {
			fillKey: .03
		},
		OK: {
			fillKey: .2
		},
		OR: {
			fillKey: .18
		},
		PA: {
			fillKey: .18
		},
		RI: {
			fillKey: .18
		},
		SC: {
			fillKey: .2
		},
		SD: {
			fillKey: .2
		},
		TN: {
			fillKey: .2
		},
		TX: {
			fillKey: 0.1
		},
		UT: {
			fillKey: .2
		},
		WI: {
			fillKey: .18
		},
		VA: {
			fillKey: .15
		},
		VT: {
			fillKey: .18
		},
		WA: {
			fillKey: .18
		},
		WV: {
			fillKey: .2
		},
		WY: {
			fillKey: .2
		},
		CA: {
			fillKey: .18
		},
		CT: {
			fillKey: .18
		},
		AK: {
			fillKey: .2
		},
		AR: {
			fillKey: .2
		},
		AL: {
			fillKey: .2
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
	
	createFills() {
		//Find lowest and highest percentages to make color gradient
		let lowest = 1;
		let highest = 0;
		for (let state in this.state.states) {
			this.state.states[state].fillKey < lowest ? lowest = this.state.states[state].fillKey : null;
			this.state.states[state].fillKey > highest ? highest = this.state.states[state].fillKey : null;
		}
		
		//Create color gradient based on lowest and highest percentages found
		const colors = d3.scale.linear().domain([lowest, highest]).range(['#fff5f5', '#cc0000']);
		let colorObj = {};
		for (let state in this.state.states) {
			colorObj[this.state.states[state].fillKey] = colors(this.state.states[state].fillKey)	
		}
		console.log(colorObj);
		return colorObj;
	}

  render() {
		return (
			<Example label="USA Heat Map">
				<Datamap
				scope="usa"
				geographyConfig={{
					highlightBorderColor: '#bada55',
				popupTemplate: (geography, data) =>
					`<div class='hoverinfo'><b>${geography.properties.name}\nTrends:\n</b> ${data.trends.map((trend) => {
						return ' ' + trend.word + ': ' + trend.count;
					})}`,
						highlightBorderWidth: 3
				}}
				fills={this.createFills()}
				data={this.state.states}
			labels />
			</Example>);
	}
}

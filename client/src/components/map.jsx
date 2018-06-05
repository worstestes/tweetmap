import React from 'react';

import Datamap from './datamap.jsx';

import testData from '../../../database/testData.js';
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
		this.setTrends(testData.testTrends);
		this.setPercentages(testData.testPercentages);
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
		let sumPercentage = 0;
		let count = 0;
		for (let state in this.state.states) {
			count++;
			sumPercentage += this.state.states[state].fillKey;
			this.state.states[state].fillKey < lowest ? lowest = this.state.states[state].fillKey : null;
			this.state.states[state].fillKey > highest ? highest = this.state.states[state].fillKey : null;
		}
		
		let mean = sumPercentage / count;
		//Create color gradient based on lowest and highest percentages found
		const colors = d3.scale.linear().domain([lowest, mean, highest]).range(['#fff0f0', '#ff4d4d', '#990000']);
		let colorObj = {};
		for (let state in this.state.states) {
			colorObj[this.state.states[state].fillKey] = colors(this.state.states[state].fillKey)	
		}
		console.log(colorObj);
		return colorObj;
	}

  render() {
		return (
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
		)
	}
}

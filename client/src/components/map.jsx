import React from 'react';
import axios from 'axios';

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
			},
			nationalTrends: [],
			selectValue: 'Top National Trends',
      colors: {},
      textbox: ''
		}
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextboxChange = this.handleTextboxChange.bind(this);
  }
  componentWillMount() {
    this.getNationalTrends();
		this.setTrends(testData.testTrends);
		this.setPercentages(testData.testPercentages);
  }

  getNationalTrends() {
		axios.get('/nationaltrends')
			.then((response) => {
				this.setState({
					nationalTrends: response.data
				});
			}).catch((err) => {
				return console.error(err);
			})
	}
	
	postStatePercentages(searchTerm) {
    console.log(searchTerm)
    axios.post('/statepercentages', {word: searchTerm})
			.then((response) => {
				this.setPercentages(response.data);
			})
	}

  setPercentages(data) {
		let statesCopy = Object.assign({}, this.state.states);
		//Clear percentages
		for (let state in statesCopy) {
			statesCopy[state].fillKey = 0;
		}

		//Populate percentages
		for (let state in statesCopy) {
			if (data[state]) {
				statesCopy[state].fillKey = data[state].fillKey;
			}
		}
		this.setState({
			states: statesCopy,
		});
		this.setFills();
		setTimeout(() => {
			console.log('colors', this.state.colors)
			console.log(this.state.states)
		}, 1000)
  }

  setTrends(data) {
		let statesCopy = Object.assign({}, this.state.states);
		for (let state in statesCopy) {
	  	statesCopy[state].trends = data[state].trends;
		}
		this.setState({states: statesCopy});
  }
	
	setFills() {
		//Find lowest and highest percentages to make color gradient
		let lowest = 100;
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
    let colors;
    if (lowest !== highest) {
      colors = d3.scale.linear().domain([lowest, mean, highest]).range(['#fff0f0', '#ff4d4d', '#990000']);
    } else {
      colors = d3.scale.linear().domain([lowest, highest]).range(['lightGreen', 'lightGreen']);
    }
		let colorObj = {};
		for (let state in this.state.states) {
			colorObj[this.state.states[state].fillKey] = colors(this.state.states[state].fillKey)	
		}
		this.setState({
			colors: colorObj
		})
		
	}

	handleDropdown(event) {
		console.log('dropdown', event.target.value);
    this.postStatePercentages(event.target.value);
    event.preventDefault();
  }

  handleTextboxChange(event) {
    this.setState({textbox: event.target.value});
  }
  
  handleSubmit(event) {
    console.log('submit', event.target.value);
    this.postStatePercentages(this.state.textbox);
    event.preventDefault();
  }

  render() {
		return (
			<div>
				<div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Trend 
              <input type="text" onChange={this.handleTextboxChange}/>
            </label>
          <input type="submit" value="Submit" />
        </form>
					<select defaultValue={this.state.selectValue} onChange={this.handleDropdown}>
            <option defaultValue hidden>Top National Trends</option>
						{this.state.nationalTrends.map((trend, i) => (
							<option value={trend.trend} key={i+1}>{(i+1) + '. ' + trend.trend}</option>	
						))}
					</select>
				</div>
				<div className='map'>
					<Datamap
						scope="usa"
						geographyConfig={{
							highlightBorderColor: 'lightBlue',
							popupTemplate: (geography, data) =>
								`<div class='hoverinfo'><b>${geography.properties.name}\nTrends:\n</b> ${data.trends.map((trend) => {
									return ' ' + trend.word + ': ' + trend.count;
									})}
								</div>`,
							highlightBorderWidth: 3
						}}
						fills={this.state.colors}
						data={this.state.states}
					labels />
				</div>
			</div>
		)
	}
}

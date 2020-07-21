import React, {Component} from 'react';

import './Calculator.css';
import Result from './result/Result';
import Keypad from './keypad/Keypad';

class Calculator extends Component {

	constructor() {
		super();
		this.state = {
			result: ''
		}
	}

	calculate = () => {
		try {
			this.setState({
				result: eval(this.state.result) + ''
			})
		} catch (e) {
			this.setState({
				result: 'E'
			})
		}
	}

	onClick = name => {
		if (name === '=') {
			this.calculate();
		} else if (name === 'C') {
			this.setState({
				result: ''
			})
		} else if (name === 'CE') {
			this.setState({
				result: this.state.result.slice(0, -1)
			})
		} else {
			this.setState({
				result: this.state.result + name
			})
		}
	}

	render() {
		return (
			<div className="calculator-container">
				<Result result={this.state.result}/>
				<Keypad onClick={this.onClick}/>
			</div>
		);
	}
}

export default Calculator;
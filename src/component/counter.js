import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
	state = {
		count: 0,
	};

	increment = (event) => {
		event.preventDefault();
		this.setState({
			count: this.state.count + 1,
		});
	};

	decrement = (event) => {
		event.preventDefault();
		if (this.state.count > 0) {
			this.setState({
				count: this.state.count - 1,
			});
		}
	};

	reset = () => {
		this.setState({
			count: 0,
		});
	};
	render() {
		return (
			<div className="maincountdiv">
				<div className="countdiv">
					<h1>{this.state.count}</h1>
					<button className="but" onClick={this.increment}>
						+
					</button>
					<button className="but" onClick={this.decrement}>
						-
					</button>
					<button className="but" onClick={this.reset}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

export default Counter;

import React, { Component } from "react";

export default class PersonalCard extends Component {
	constructor(props) {
		super(props);
		this.state = { age: this.props.age };
	}

	handleClick = () => {
		this.setState({ age: this.state.age + 1 });
	};

	render() {
		const { firstName, lastName, age, hairColor } = this.props;
		return (
			<div>
				<h1>
					{lastName}, {firstName}
				</h1>
				<div>Age: {this.state.age}</div>
				<div>Hair Color: {hairColor}</div>
				<button onClick={this.handleClick}>
					Birthday Button for {firstName} {lastName}
				</button>
			</div>
		);
	}
}

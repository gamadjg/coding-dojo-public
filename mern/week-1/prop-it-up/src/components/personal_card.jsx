import React, { Component } from "react";

export default class PersonalCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { firstName, lastName, age, hairColor } = this.props;
		return (
			<div>
				<h1>
					{lastName}, {firstName}
				</h1>
				<div>Age: {age}</div>
				<div>Hair Color: {hairColor}</div>
			</div>
		);
	}
}

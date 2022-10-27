import React from "react";

const PersonCard = (props) => {
	const { firstName, lastName, age, hairColor } = props;
	return (
		<div>
			<h1>
				{lastName}, {firstName}
			</h1>
			<div>Age: {age}</div>
			<div>Hair Color: {hairColor}</div>
		</div>
	);
};

export default PersonCard;

import React, { useState } from "react";

const BoxForm = (props) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleNewMsg(message);
		// console.log(message);
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="textBox">Input color</label>
				<input type="text" onChange={handleChange} value={message} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default BoxForm;

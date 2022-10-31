import React, { useState } from "react";
import "../box_generator.css";

const BoxForm = (props) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleNewMsg(message);
		setMessage("");
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

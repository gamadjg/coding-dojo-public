import React, { useState } from "react";
import "../style.css";

const TaskForm = () => {
	const [task, setTask] = useState("");
	// const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(task);
	};

	return (
		<div className="taskForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="textBox">Add a new task:</label>
				<input type="text" onChange={handleChange} value={task} />
				<button type="submit">Submit</button>
			</form>{" "}
		</div>
	);
};

export default TaskForm;

import React, { useReducer, useEffect } from "react";
const initialState = [];

const reducer = (state, action) => {
	switch (action.type) {
		case "newTask":
			if (action.value !== "") {
				return [...state, { value: action.value, complete: 0 }];
			}
			return [];
		// if complete checkbox, set item as complete
		case "completeTask":
			break;
		default:
			return [];
	}
};

const ItemList = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log("useEffect, new task: " + props.newTask);
		dispatch({
			type: "newTask",
			value: props.newTask,
		});
	}, [props.newTask]);
	// const createNewTask = (props) => {
	// 	dispatch({
	// 		type: "newTask",
	// 		value: props.task,
	// 	});
	// };

	// const taskList = (task) {
	// 	dispatch({
	// 		type: "newTask",
	// 		value: task,
	// 	});
	// };

	// const handleChange = (e) => {
	// 	// dispatch({
	// 	// 	type: id, // firstname
	// 	// 	value: value, // David
	// 	// });
	// };

	const checkTask = (e) => {
		console.log(e.target.id);
		console.log(e.target.name);
		// document.getElementById(e.)
	};

	return (
		<table>
			<thead>
				<tr>
					<td>Task</td>
					<td>Complete?</td>
				</tr>
			</thead>
			<tbody>
				{state.map((task, id) => {
					return (
						<tr key={id}>
							<td>
								<p className={`task-${id}`}>{task.value}</p>
							</td>
							<td>
								<input
									type="checkbox"
									onChange={checkTask}
									name={`task-${id}`}
									value={id}
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>

		// <div className="main">
		// 	<ul>
		// 		{state.map((task, id) => {
		// 			return <li key={id}>{task.value}</li>;
		// 		})}
		// 	</ul>
		// </div>
	);
};

export default ItemList;

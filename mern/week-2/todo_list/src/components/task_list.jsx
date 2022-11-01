import React, { useReducer, useEffect } from "react";
const initialState = [];

const reducer = (state, action) => {
	const newState = [...state];
	switch (action.type) {
		case "newTask":
			if (action.value !== "") {
				return [...state, { value: action.value, complete: 0 }];
			}
			return [];
		// if complete checkbox, set item as complete
		case "checkTask":
			let task = document.getElementById(action.id);

			if (newState[action.id].complete === 0) {
				newState[action.id].complete = 1;
				task.classList.replace("row", "rowChecked");
			} else {
				newState[action.id].complete = 0;
				task.classList.replace("rowChecked", "row");
			}
			return newState;
		case "deleteTask":
			console.log(action.id);
			newState.splice(action.id, 1);
			return newState;

		default:
			return [];
	}
};

const ItemList = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "newTask",
			value: props.newTask,
		});
	}, [props.newTask]);

	const checkTask = (e) => {
		dispatch({
			type: "checkTask",
			id: e.target.value,
		});
	};

	const deleteTask = (e) => {
		console.log(e.target.value);
		dispatch({
			type: "deleteTask",
			id: e.target.value,
		});
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
						<tr key={id} id={id} className="row">
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
							<td>
								<button onClick={deleteTask} value={id}>
									DELETE
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ItemList;

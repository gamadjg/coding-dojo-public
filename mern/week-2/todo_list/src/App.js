import "./App.css";
import { useState } from "react";
import TaskForm from "./components/task_form";
import TaskList from "./components/task_list";

function App() {
	const [task, setTask] = useState("");
	// const [taskList, setTaskList] = useState([]);

	const handleNewTask = (newTask) => {
		// setTaskList([...taskList, { value: newTask, complete: 0 }]);
		// console.log("Task List: " + taskList);
		setTask(newTask);
		// console.log("New task: " + newTask);
	};

	return (
		<div className="App">
			<TaskForm handleNewTask={handleNewTask} />
			<TaskList newTask={task} />
		</div>
	);
}

export default App;

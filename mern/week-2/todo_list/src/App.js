import "./App.css";
import { useState } from "react";
import TaskForm from "./components/task_form";
import TaskList from "./components/task_list";

function App() {
	const [task, setTask] = useState("");

	const handleNewTask = (newTask) => {
		setTask(newTask);
	};

	return (
		<div className="App">
			<TaskForm handleNewTask={handleNewTask} />
			<TaskList newTask={task} />
		</div>
	);
}

export default App;

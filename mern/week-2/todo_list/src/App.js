import "./App.css";
import TaskForm from "./components/task_form";
import TaskList from "./components/task_list";

function App() {
	return (
		<div className="App">
			<TaskForm />
			<TaskList />
		</div>
	);
}

export default App;

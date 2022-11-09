import Main from "./views/Main";
import AuthorNew from "./views/AuthorNew";
import AuthorEdit from "./views/AuthorEdit";
import "./assets/App.css";
import "./assets/style.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Favorite Authors</h1>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/new" element={<AuthorNew />} />
				{/* <Route path="/edit/:id" element={<AuthorEdit />} /> */}
			</Routes>
		</div>
	);
}
export default App;

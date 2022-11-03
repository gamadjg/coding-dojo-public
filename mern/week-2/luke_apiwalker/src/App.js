import "./App.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavSearch from "./components/navSearch";
import Results from "./components/results";

const Home = (props) => {
	return <div></div>;
};

function App() {
	return (
		<div className="App">
			<h1>Luke APIwalker</h1>
			<NavSearch />
			<Routes>
				<Route path="/results/:category/:id" element={<Results />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

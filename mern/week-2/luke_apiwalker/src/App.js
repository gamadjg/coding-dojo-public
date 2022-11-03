import "./App.css";
// import { useState } from "react";
// import { useParams } from "react-router";
import "./App.css";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NavSearch from "./components/navSearch";

function App() {
	return (
		<div className="App">
			<h1>Luke APIwalker</h1>
			<NavSearch />
			{/* <Routes>
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Home />} />
			</Routes> */}
		</div>
	);
}

export default App;

import { useState } from "react";
import { useParams } from "react-router";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = (props) => {
	return (
		<div>
			<h1 style={{ color: "red" }}>Home Component</h1>
			<Link to={"/"}>Home </Link>
			<Link to={"/about"}>About </Link>
			<Link to={"/form"}>Form </Link>
			<Link to={"/city/Boston"}>Boston </Link>
		</div>
	);
};

const City = (props) => {
	const { city } = useParams();
	return (
		<div>
			<h1 style={{ color: "red" }}>City entered is: {city}</h1>
			<Link to={"/"}>Home </Link>
			<Link to={"/about"}>About </Link>
			<Link to={"/form"}>Form </Link>
			<Link to={"/city/Boston"}>Boston </Link>
		</div>
	);
};

const About = (props) => {
	return (
		<div>
			<h1 style={{ color: "blue" }}>About Component</h1>
			<Link to={"/"}>Home </Link>
			<Link to={"/about"}>About </Link>
			<Link to={"/form"}>Form </Link>
			<Link to={"/city/Boston"}>Boston </Link>
		</div>
	);
};

const Form = (props) => {
	const [text, setText] = useState("");
	const navigate = useNavigate();

	const submitForm = (e) => {
		e.preventDefault();
		navigate(`/results/${text}`);
	};

	return (
		<div>
			<Link to={"/"}>Home </Link>
			<Link to={"/about"}>About </Link>
			<Link to={"/form"}>Form </Link>
			<Link to={"/city/Boston"}>Boston </Link>
			<form onSubmit={submitForm}>
				<label>Insert Name</label>
				<input
					type="text"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<button type="submit">Submit</button>
			</form>
			<p>{text}</p>
		</div>
	);
};

const Result = (props) => {
	const { value } = useParams();
	console.log(value);
	return (
		<div>
			<h1>{value}</h1>
			<Link to={"/"}>Home </Link>
			<Link to={"/about"}>About </Link>
			<Link to={"/form"}>Form </Link>
			<Link to={"/city/Boston"}>Boston </Link>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<h1>Routing Example</h1>
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Home />} />
				<Route path="/city/:city" element={<City />} />
				<Route path="/form" element={<Form />} />
				<Route path="/results/:value" element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;

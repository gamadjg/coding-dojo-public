import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [pokeNames, setPokeNames] = useState([]);
	const [toggle, setToggle] = useState(0);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then((pokeFetch) => {
				const pokeList = [];
				for (const pokeman in pokeFetch.data.results) {
					pokeList.push(pokeFetch.data.results[pokeman].name);
				}
				setPokeNames(pokeList);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="App">
			{!toggle ? (
				<button onClick={handleToggle}>Get Pokemon</button>
			) : (
				<>
					<button onClick={handleToggle}>Hide Pokemon</button>

					<div
						style={{
							display: "flex",
							width: "1400px",
							flexWrap: "wrap",
							gap: "15px",
						}}
					>
						{pokeNames.map((pokemon, id) => {
							return (
								<p key={id} style={{ margin: "5px 0" }}>
									{pokemon}
								</p>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default App;

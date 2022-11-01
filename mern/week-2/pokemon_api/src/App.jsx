import { useState, useEffect } from "react";
import "./App.css";

function App() {
	// Create array state to hold all pokemon names
	const [pokeNames, setPokeNames] = useState([]);
	let displayList = [];

	const getPokemon = async () => {
		let pokeFetch = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then((response) => response.json())
			.catch((err) => {
				console.log(err);
			});
		const pokeList = [];
		for (const pokeman in pokeFetch.results) {
			pokeList.push(pokeFetch.results[pokeman].name);
		}
		console.log(pokeList);
		setPokeNames(pokeList);
	};

	if (pokeNames.length > 0) {
		displayList = pokeNames.map((pokemon, id) => {
			return (
				<p key={id} style={{ margin: "5px 0" }}>
					{pokemon}
				</p>
			);
		});
	}

	return (
		<div className="App">
			<button onClick={getPokemon}>Get Pokemon</button>
			{pokeNames.length === 0 ? (
				<div>No Pokemon yet...</div>
			) : (
				<div
					style={{
						display: "flex",
						width: "1400px",
						flexWrap: "wrap",
						gap: "15px",
					}}
				>
					{displayList}
				</div>
			)}
		</div>
	);
}

export default App;

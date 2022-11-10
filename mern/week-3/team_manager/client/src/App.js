import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import "./assets/App.css";
import "./assets/style.css";
import Nav from "./views/Nav";
import ManagePlayers from "./views/ManagePlayers";
import PlayerStatus from "./views/PlayerStatus";

function App() {
	const [players, setPlayers] = useState([]);
	const tabs = [
		{
			path: "/players/list",
			text: "Manager Players",
		},
		{
			path: "/status/games",
			text: "Manage Player Status",
		},
	];

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/players")
			.then((res) => {
				setPlayers(res.data);
			})
			.catch((err) => console.error(err));
	});

	const removePlayer = (player_id) => {
		console.log("Removing player: " + player_id);
		setPlayers(players.filter((player) => player._id !== player_id));
	};

	const activatePlayer = (selection, game, status, id) => {
		let player = players.filter((player) => player._id === id);
		player[0].games[game] = selection;
		console.log(player[0]);

		axios.put(`http://localhost:8000/api/players/${id}/edit`, {
			...player[0],
		});
	};

	const Landing = () => {
		const navigate = useNavigate();

		useEffect(() => {
			navigate("/players/list");
		});
	};

	return (
		<div className="App">
			<h1>Favorite Players</h1>
			<Nav propTabs={tabs} />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route
					path="/players/list"
					element={
						<ManagePlayers
							initialPlayers={players}
							removePlayer={removePlayer}
						/>
					}
				/>
				<Route
					path="/status/games"
					element={
						<PlayerStatus
							initialPlayers={players}
							activatePlayer={activatePlayer}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
export default App;

import ManagePlayers from "./views/ManagePlayers";
// import PlayerNew from "./views/PlayerNew";
import PlayerStatus from "./views/PlayerStatus";
// import PlayerEdit from "./views/PlayerEdit";
import "./assets/App.css";
import "./assets/style.css";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Nav";
// import PreLoad from "./views/PreLoad";
import axios from "axios";

function App() {
	// const navigate = useNavigate();
	const [players, setPlayers] = useState([]);
	// const [playersLoaded, setPlayersLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/players")
			.then((res) => {
				setPlayers(res.data);
				// setPlayersLoaded(true);
			})
			.catch((err) => console.error(err));
	});

	const removePlayer = (player_id) => {
		console.log("Removing player: " + player_id);
		setPlayers(players.filter((player) => player._id !== player_id));
	};

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<div></div>} />
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
					path="/status/game/:game_id"
					element={<PlayerStatus initialPlayers={players} />}
				/>
			</Routes>
		</div>
	);
}
export default App;

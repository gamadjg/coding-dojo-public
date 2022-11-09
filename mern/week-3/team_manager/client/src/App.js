import ManagePlayers from "./views/ManagePlayers";
// import PlayerNew from "./views/PlayerNew";
import PlayerStatus from "./views/PlayerStatus";
// import PlayerEdit from "./views/PlayerEdit";
import "./assets/App.css";
import "./assets/style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	const Landing = () => {
		const navigate = useNavigate();

		useEffect(() => {
			navigate("/players/list");
		});
	};

	return (
		<div className="App">
			<h1>Favorite Players</h1>
			<div>
				<Link to={"/players/list"}>Manager Players</Link>
				<div>|</div>
				<Link to={"/status/game/1"}>Manager Player Status</Link>
			</div>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/players/list" element={<ManagePlayers />} />
				<Route path="/status/game/:game_id" element={<PlayerStatus />} />
				{/* <Route path="/players/addplayer" element={<PlayerNew />} /> */}
				{/* <Route path="/edit/:id/" element={<PlayerEdit />} /> */}
			</Routes>
		</div>
	);
}
export default App;

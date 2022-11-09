import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlayerList from "./ManagePlayers";
import PlayerNew from "./PlayerNew";

const ManagePlayers = () => {
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [view, setView] = useState("list");

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/players")
			.then((res) => {
				setPlayers(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		// if view is currently set to "add" , and "list" was selected, switch to "list", else do nothing
		// if view is currently set to "list", and "view" was selected, switch to "view", else do nothing
	};

	return (
		<div className="main_container">
			<div>
				<Link to={"#"} onClick={handleClick}>
					List
				</Link>
				<div>|</div>
				<Link to={"#"} onClick={handleClick}>
					Add a new player
				</Link>
			</div>
			{!loaded ? (
				<div>loading</div>
			) : view === "list" ? (
				<PlayerList initialPlayers={players} />
			) : (
				<PlayerNew />
			)}
		</div>
	);
};

export default ManagePlayers;

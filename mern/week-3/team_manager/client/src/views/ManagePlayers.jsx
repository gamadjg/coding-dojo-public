import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlayerList from "./PlayerList";
import PlayerNew from "./PlayerNew";

const ManagePlayers = (props) => {
	const { initialPlayers, removePlayer } = props;
	// console.log(initialPlayers);
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [view, setView] = useState("list");

	useEffect(() => {
		// console.log(initialPlayers);
		setPlayers(initialPlayers);
		setLoaded(true);
	}, [initialPlayers]);

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:8000/api/players")
	// 		.then((res) => {
	// 			setPlayers(res.data);
	// 			setLoaded(true);
	// 		})
	// 		.catch((err) => console.error(err));
	// }, []);

	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.target.dataset.select);
		const selected = e.target.dataset.select;
		// if view is currently set to "add" , and "list" was selected, switch to "list", else do nothing
		if (view === "list" && selected !== "list") {
			console.log("switch to new");
			setView("new");
		}
		// if view is currently set to "list", and "view" was selected, switch to "view", else do nothing
		else if (view === "new" && selected !== "new") {
			console.log("switch to list");
			setView("list");
		}
	};

	const remove = (player_id) => {
		removePlayer(player_id);
		// setPlayers(players.filter((player) => player._id !== player_id));
	};

	return (
		<div className="main_container">
			<div className="page_nav">
				<Link to={"#"} onClick={handleClick} data-select="list">
					List
				</Link>
				<div>|</div>
				<Link to={"#"} onClick={handleClick} data-select="new">
					Add a new player
				</Link>
			</div>
			{!loaded ? (
				<div>loading</div>
			) : view === "list" ? (
				<PlayerList initialPlayers={players} removePlayer={remove} />
			) : (
				<PlayerNew />
			)}
		</div>
	);
};

export default ManagePlayers;

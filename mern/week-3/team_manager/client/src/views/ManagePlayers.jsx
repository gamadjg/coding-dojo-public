import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import PlayerNew from "./PlayerNew";
import Nav from "./Nav";

const ManagePlayers = (props) => {
	const { initialPlayers, removePlayer } = props;
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [view, setView] = useState("List");
	const playerTabs = [
		{
			path: "/players/list",
			text: "List",
		},
		{
			path: "",
			text: "New Player",
		},
	];

	useEffect(() => {
		setPlayers(initialPlayers);
		setLoaded(true);
	}, [initialPlayers]);

	const handleClick = (e) => {
		e.preventDefault();
		// console.log(e.target.dataset.select);
		const selected = e.target.dataset.select;
		// if view is currently set to "add" , and "list" was selected, switch to "list", else do nothing
		if (view === "List" && selected !== "List") {
			setView("New Player");
		}
		// if view is currently set to "list", and "view" was selected, switch to "view", else do nothing
		else if (view === "New Player" && selected !== "New Player") {
			setView("List");
		}
	};

	const remove = (player_id) => {
		removePlayer(player_id);
	};

	return (
		<div className="main_container">
			<Nav propTabs={playerTabs} handleClick={handleClick} />
			{!loaded ? (
				<div>loading</div>
			) : view === "List" ? (
				<PlayerList initialPlayers={players} removePlayer={remove} />
			) : (
				<PlayerNew />
			)}
		</div>
	);
};

export default ManagePlayers;

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const PlayerStatus = (props) => {
	const { initialPlayers, activatePlayer } = props;
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [game, setGame] = useState(1);
	const gameTabs = [
		{
			path: "",
			text: "Game 1",
		},
		{
			path: "",
			text: "Game 2",
		},
		{
			path: "",
			text: "Game 3",
		},
	];

	useEffect(() => {
		setPlayers(initialPlayers);
		setLoaded(true);
	}, [initialPlayers]);

	const handleClick = (e) => {
		e.preventDefault();
		const selected = e.target.dataset.select;

		switch (selected) {
			case "Game 1":
				setGame(1);
				break;
			case "Game 2":
				setGame(2);
				break;
			case "Game 3":
				setGame(3);
				break;
			default:
				break;
		}
	};

	const activate = (selection, game, status, id) => {
		activatePlayer(selection, game, status, id);
	};
	return (
		<div className="main_container">
			<Nav propTabs={gameTabs} handleClick={handleClick} />
			{!loaded ? (
				<div>Loading</div>
			) : (
				<Table className="player_list">
					<thead className="t_head">
						<tr>
							<th>Player Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody className="t_row">
						{players.map((player, i) => (
							<tr className="player_container" key={i}>
								<td>
									<p className="player_name">{player.name}</p>
								</td>
								<td>
									<button
										className={
											player.games[game] === "playing"
												? "active_playing"
												: "not_active"
										}
										data-select={player.games[game]}
										onClick={() => {
											activate("playing", game, player.games[game], player._id);
										}}
									>
										Playing
									</button>
									<button
										className={
											player.games[game] === "not playing"
												? "active_not_playing"
												: "not_active"
										}
										data-select={player.games[game]}
										onClick={() => {
											activate(
												"not playing",
												game,
												player.games[game],
												player._id
											);
										}}
									>
										Not Playing
									</button>
									<button
										className={
											player.games[game] === "undecided"
												? "active_undecided"
												: "not_active"
										}
										data-select={player.games[game]}
										onClick={() => {
											activate(
												"undecided",
												game,
												player.games[game],
												player._id
											);
										}}
									>
										Undecided
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
};

export default PlayerStatus;

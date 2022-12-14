import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PlayerDelete from "../components/PlayerDelete";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

const PlayerList = (props) => {
	const { initialPlayers, removePlayer } = props;
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		setPlayers(initialPlayers);
	}, [initialPlayers]);

	const remove = (id) => {
		removePlayer(id);
	};

	return (
		<div className="player_list_container">
			<Table className="player_list">
				<thead className="t_head">
					<tr>
						<th>Player Name</th>
						<th>Preferred position</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="t_row">
					{players.map((player, i) => (
						<tr className="player_container" key={i}>
							<td>
								<p className="player_name">{player.name}</p>
							</td>
							<td>{player.position}</td>
							<td>
								<div className="button_container">
									<PlayerDelete
										player_id={player._id}
										successCallback={() => {
											remove(player._id);
										}}
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlayerList;

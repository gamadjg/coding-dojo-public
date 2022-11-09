import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";
import PlayerDelete from "../components/PlayerDelete";

const PlayerList = (props) => {
	const { initialPlayers } = props;
	const [players, setPlayers] = useState(initialPlayers);

	const removePlayer = (id) => {
		setPlayers(players.filter((player) => player._id !== id));
	};

	return (
		<div className="player_list_container">
			<p>We have quotes by:</p>
			<div className="player_list">
				{players.map((player, i) => (
					<div className="player_container" key={i}>
						<p className="player_name">{player.name}</p>
						<div className="button_container">
							<Link to={`/edit/${player._id}`}>
								<button>Edit</button>
							</Link>
							<PlayerDelete
								player_id={player._id}
								successCallback={() => {
									removePlayer(player._id);
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlayerList;

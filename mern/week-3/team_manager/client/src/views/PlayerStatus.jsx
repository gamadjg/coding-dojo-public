import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlayerStatus = () => {
	const { game_id } = useParams();
	const [players, setPlayers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [game, setGame] = useState(1);

	useEffect(() => {
		// make call to get all players
		axios
			.get("http://localhost:8000/api/players")
			.then((res) => {
				setPlayers(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
		// set players state
	});

	return <div className="main_container">Player Status</div>;
};

export default PlayerStatus;

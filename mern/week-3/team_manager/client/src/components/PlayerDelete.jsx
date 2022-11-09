import React from "react";
import axios from "axios";

const PlayerDelete = (props) => {
	const { player_id, successCallback } = props;

	const performDelete = () => {
		axios
			.delete(`http://localhost:8000/api/players/${player_id}/delete`)
			.then((res) => successCallback(player_id))
			.catch((err) => {
				console.log({
					message: "Could not delete player.",
					error: err,
				});
			});
	};
	return <button onClick={performDelete}>Delete</button>;
};

export default PlayerDelete;

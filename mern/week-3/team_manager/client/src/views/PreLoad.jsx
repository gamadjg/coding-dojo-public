import React, { useEffect, useState } from "react";
import axios from "axios";

const PreLoad = (props) => {
	// const [players, setPlayers] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/players")
			.then((res) => {
				props.loadPlayers(res.data);
				// setPlayers(res.data);
			})
			.catch((err) => console.error(err));
	});

	return <div>Loading Users</div>;
};

export default PreLoad;

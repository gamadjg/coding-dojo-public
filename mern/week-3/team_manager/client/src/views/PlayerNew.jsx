import React from "react";
import axios from "axios";
import PlayerForm from "../components/PlayerForm";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PlayerNew = () => {
	const navigate = useNavigate();

	const handlePlayer = (name) => {
		axios
			.post("http://localhost:8000/api/players/create", {
				name,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="player_form">
			<Link to="/">Home</Link>
			<p>Create a new Player</p>
			<PlayerForm initialName="" handlePlayer={handlePlayer} />
		</div>
	);
};

export default PlayerNew;

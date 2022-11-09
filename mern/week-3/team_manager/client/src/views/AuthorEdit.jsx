import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerForm from "../components/PlayerForm";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PlayerNew = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/players/${id}`)
			.then((res) => {
				setName(res.data.player.name);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const handlePlayer = (updatedName) => {
		axios
			.put(`http://localhost:8000/api/players/${id}/edit`, {
				name: updatedName,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="player_form">
			<Link to="/">Home</Link>
			<p>Edit this player</p>
			<PlayerForm initialName={name} handlePlayer={handlePlayer} />
		</div>
	);
};

export default PlayerNew;

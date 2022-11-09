import React, { useState } from "react";
import axios from "axios";
import PlayerForm from "../components/PlayerForm";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PlayerNew = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);
	const handlePlayer = (name) => {
		axios
			.post("http://localhost:8000/api/players/create", {
				name,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) => {
				const errorResponse = err.response.data.errors;
				const errorArr = [];
				for (const key of Object.keys(errorResponse)) {
					errorArr.push(errorResponse[key].message);
				}
				setErrors(errorArr);
			});
	};

	return (
		<div className="player_form">
			<Link to="/">Home</Link>
			<p>Create a new Player</p>
			<PlayerForm initialName="" handlePlayer={handlePlayer} />
			{errors.map((error, i) => {
				return <p key={i}>{error}</p>;
			})}
		</div>
	);
};

export default PlayerNew;

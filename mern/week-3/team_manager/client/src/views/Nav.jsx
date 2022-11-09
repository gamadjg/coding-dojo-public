import "../assets/App.css";
import "../assets/style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import PageSelect from "../components/PageSelect";

const Nav = () => {
	const navigate = useNavigate();
	const [tabs, setTabs] = useState([]);

	useEffect(() => {
		setTabs([
			{
				path: "/players/list",
				text: "Manager Players",
			},
			{
				path: "/status/game/1",
				text: "Manage Player Status",
			},
		]);
		navigate("/players/list");
	}, [navigate]);

	return (
		<div>
			<h1>Favorite Players</h1>
			<PageSelect tabs={tabs} />
		</div>
	);
};

export default Nav;

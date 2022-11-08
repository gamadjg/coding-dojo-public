import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const navBar = () => {
	return (
		<div className="nav">
			<div id="nav_left">
				<h1>Product Manager</h1>
			</div>
			<div id="nav_right">
				<Link to={"/"}>Product Form</Link>
			</div>
		</div>
	);
};

export default navBar;

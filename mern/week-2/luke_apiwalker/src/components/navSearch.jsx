import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavSearch = (props) => {
	const [categoryList, setCategoryList] = useState([]);
	const [itemId, setItemId] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("https://swapi.dev/api/")
			.then((response) => {
				let responseList = [];
				for (const value in response.data) {
					responseList.push(value);
				}
				setCategoryList(responseList);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleForm = (e) => {
		e.preventDefault();
		let category = e.target.dropdown.value;
		navigate(`/results/${category}/${itemId}`);
	};

	const handleInput = (e) => {
		setItemId(e.target.value);
	};

	return (
		<div className="navSearch">
			<div>
				<form onSubmit={handleForm}>
					<label htmlFor="dropdown">Search for people:</label>
					<select id="dropdown" name="dropdown">
						{categoryList.map((category, id) => {
							return (
								<option key={id} value={category}>
									{category}
								</option>
							);
						})}
					</select>
					<label htmlFor="itemId"> ID: </label>
					<input
						type="text"
						name="itemId"
						id="itemId"
						value={itemId}
						onChange={handleInput}
					/>
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
};

export default NavSearch;

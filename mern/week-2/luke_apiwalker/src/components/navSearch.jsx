import React, { useEffect, useState } from "react";
import axios from "axios";

const NavSearch = () => {
	const [categoryList, setCategoryList] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios
			.get("https://swapi.dev/api/")
			.then((response) => {
				console.log(response.data);
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
		console.log(e.target);
	};

	return (
		<div className="navSearch">
			<div>
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
			</div>
			<div>
				<form onSubmit={handleForm}>
					<label htmlFor="itemId">ID: </label>
					<input type="text" name="itemId" id="itemId" />
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
};

export default NavSearch;

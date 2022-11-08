import React, { useState } from "react";
import axios from "axios";

const PersonForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");

	const onSubmitHandler = (e) => {
		axios
			.post("http://localhost:8000/api/products/create", {
				title,
				price,
				description,
			})
			.then((res) => {})
			.catch((err) => console.log(err));
	};

	return (
		<div className="form">
			<h1>Create a new Product</h1>
			<form onSubmit={onSubmitHandler}>
				<p>
					<label>Title</label>
					<br />
					<input
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</p>
				<p>
					<label>Price</label>
					<br />
					<input
						type="number"
						onChange={(e) => setPrice(e.target.value)}
						value={price}
					/>
				</p>
				<p>
					<label>Description</label>
					<br />
					<input
						type="text"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</p>
				<input type="submit" />
			</form>
		</div>
	);
};

export default PersonForm;

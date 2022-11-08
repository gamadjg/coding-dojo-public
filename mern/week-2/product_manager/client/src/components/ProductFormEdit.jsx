import axios from "axios";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const PersonFormEdit = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/products/${id}`)
			.then((res) => {
				// setProduct([res.data.product]);
				setTitle(res.data.product.title);
				setPrice(res.data.product.price);
				setDescription(res.data.product.description);
				setLoaded(true);
			})
			.catch((err) => {
				setLoaded(false);
				console.log({
					message: "Couldn't pull product for editing",
					error: err,
				});
			});
	}, [id]);

	const onSubmitHandler = (e) => {
		// e.preventDefault();
		axios
			.put(`http://localhost:8000/api/products/${id}/edit`, {
				title,
				price,
				description,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) =>
				console.log({
					message: "Unsuccessful navigation back home after edit.",
					error: err,
				})
			);
	};

	return (
		<div>
			{!loaded ? (
				<div>loading...</div>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};

export default PersonFormEdit;

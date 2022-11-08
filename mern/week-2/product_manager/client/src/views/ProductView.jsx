import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ProductView = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/products/${id}`)
			.then((res) => {
				setProduct([res.data.product]);
				setLoaded(true);
			})
			.catch((err) => {
				console.error(err);
				setLoaded(false);
			});
	}, [id]);

	return (
		<div>
			{!loaded ? (
				<div>loading...</div>
			) : (
				<>
					<div>Name: {product[0]["title"]}</div>
					<div>Price: {product[0]["price"]}</div>
					<div>Description: {product[0]["description"]}</div>
				</>
			)}
		</div>
	);
};

export default ProductView;

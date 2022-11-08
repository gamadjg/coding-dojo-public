import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import axios from "axios";

const ProductList = (props) => {
	const deleteProduct = (e) => {
		e.preventDefault();
		const id = e.target.dataset.id;
		axios
			.delete(`http://localhost:8000/api/products/${id}/delete`)
			.then((res) => props.deleteProduct(id))
			.catch((err) => {
				console.log({
					message: "Couldn't no delete product.",
					error: err,
				});
			});
	};

	return (
		<div className="product_list_container">
			<h1>All Products:</h1>
			<div className="product_list">
				{props.products.map((product, i) => (
					<div className="product_container" key={i}>
						<Link to={`/${product._id}`} className="product_link">
							{product.title}
						</Link>
						<Link to={`/${product._id}/edit`} className="product_link">
							Edit
						</Link>
						<Link
							onClick={deleteProduct}
							data-id={product._id}
							to="#"
							className="product_link"
						>
							Delete
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;

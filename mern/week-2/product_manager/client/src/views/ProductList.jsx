import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import axios from "axios";

const ProductList = (props) => {
	const deleteProduct = (e) => {
		e.preventDefault();
		// console.log(e.tart);
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
							to={`/${product._id}/delete`}
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

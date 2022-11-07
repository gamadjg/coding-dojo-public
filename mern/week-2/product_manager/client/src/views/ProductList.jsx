import React from "react";
import { useParams } from "react-router-dom";

const ProductList = (props) => {
	// const [title, ]

	return (
		<div>
			{props.products.map((product, i) => (
				<p key={i}>
					{product.title}, {product.price}, {product.description}
				</p>
			))}
		</div>
	);
};

export default ProductList;

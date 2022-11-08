import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../views/ProductList";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const deleteProduct = (id) => {
		setProducts(products.filter((product) => product._id !== id));
	};

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				setProducts(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="home">
			<ProductForm />
			{loaded && (
				<ProductList
					products={products}
					deleteProduct={(e) => deleteProduct(e)}
				/>
			)}
		</div>
	);
};

export default Home;

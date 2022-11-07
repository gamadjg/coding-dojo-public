import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../views/ProductList";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = () => {
	return <div></div>;
};

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	});

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/products" element={<ProductsList />} /> */}
			</Routes>
			<nav>
				<h1>Product Manager</h1>
			</nav>
			<ProductForm />
			{loaded && <ProductList products={products} />}
		</div>
	);
};

export default Main;

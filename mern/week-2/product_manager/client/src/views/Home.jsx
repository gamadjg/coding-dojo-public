import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../views/ProductList";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

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
			{loaded && <ProductList products={products} />}
		</div>
	);
};

export default Home;

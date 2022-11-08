import React from "react";
import Home from "../views/Home";
import ProductView from "./ProductView";
import ProductFormEdit from "../components/ProductFormEdit";
import { Routes, Route } from "react-router-dom";

const Main = () => {
	return (
		<div className="main">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<ProductView />} />
				<Route path="/:id/edit" element={<ProductFormEdit />} />
			</Routes>
		</div>
	);
};

export default Main;

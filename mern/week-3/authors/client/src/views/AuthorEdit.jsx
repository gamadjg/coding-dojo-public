import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AuthorNew = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/authors/${id}`)
			.then((res) => {
				setName(res.data.author.name);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const handleAuthor = (updatedName) => {
		axios
			.put(`http://localhost:8000/api/authors/${id}/edit`, {
				name: updatedName,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="author_form">
			<Link to="/">Home</Link>
			<p>Edit this author</p>
			<AuthorForm initialName={name} handleAuthor={handleAuthor} />
		</div>
	);
};

export default AuthorNew;

import React from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AuthorNew = () => {
	const navigate = useNavigate();

	const handleAuthor = (name) => {
		axios
			.post("http://localhost:8000/api/authors/create", {
				name,
			})
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="author_form">
			<Link to="/">Home</Link>
			<p>Create a new Author</p>
			<AuthorForm initialName="" handleAuthor={handleAuthor} />
		</div>
	);
};

export default AuthorNew;

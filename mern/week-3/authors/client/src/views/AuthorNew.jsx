import React from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useNavigate } from "react-router";

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
		<div className="new_author_view">
			<p>Create a new Author</p>
			<AuthorForm initialName="" handleAuthor={handleAuthor} />
		</div>
	);
};

export default AuthorNew;

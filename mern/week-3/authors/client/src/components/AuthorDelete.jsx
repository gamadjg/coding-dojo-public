import React from "react";
import axios from "axios";

const AuthorDelete = (props) => {
	const { author_id, successCallback } = props;

	const performDelete = () => {
		axios
			.delete(`http://localhost:8000/api/authors/${author_id}/delete`)
			.then((res) => successCallback(author_id))
			.catch((err) => {
				console.log({
					message: "Could not delete author.",
					error: err,
				});
			});
	};
	return <button onClick={performDelete}>Delete</button>;
};

export default AuthorDelete;

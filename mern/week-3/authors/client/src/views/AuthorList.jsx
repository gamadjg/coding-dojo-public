import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";
import AuthorDelete from "../components/AuthorDelete";

const AuthorList = (props) => {
	const { initialAuthors } = props;
	const [authors, setAuthors] = useState(initialAuthors);

	const removeAuthor = (id) => {
		setAuthors(authors.filter((author) => author._id !== id));
	};

	return (
		<div className="author_list_container">
			<p>We have quotes by:</p>
			<div className="author_list">
				{authors.map((author, i) => (
					<div className="author_container" key={i}>
						<p className="author_link">{author.name}</p>
						<Link to={`/edit/${author._id}`}>
							<button>Edit</button>
						</Link>
						<AuthorDelete
							author_id={author._id}
							successCallback={() => {
								removeAuthor(author._id);
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AuthorList;

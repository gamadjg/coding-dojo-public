import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorList from "./AuthorList";

const Main = () => {
	const [authors, setAuthors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors")
			.then((res) => {
				setAuthors(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="main">
			<Link to={"/new"}>Add a new author</Link>
			{loaded && <AuthorList initialAuthors={authors} />}
		</div>
	);
};

export default Main;

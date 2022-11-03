import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import errorImg from "../obi_wan_kenobi.jpg";

const Results = (props) => {
	const { category, id } = useParams();
	const [resultKeys, setResultKeys] = useState([]);
	const [results, setResults] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/${category}/${id}`)
			.then((response) => {
				setResults(Object.values(response.data));
				setResultKeys(Object.keys(response.data));
				setError(false);
			})
			.catch((err) => {
				console.log("These are not the droids you're looking for.");
				setError(true);
			});
	}, [category, id]);

	const normalizedResults = () => {
		let displayResults = [];
		if (!error) {
			displayResults = [
				resultKeys.map((value, id) => {
					return (
						<p key={id}>
							{value}: {results[id]}
						</p>
					);
				}),
			];
			return displayResults;
		} else {
			return <img src={errorImg} alt="Obi Wan Kenobi not looking for droids" />;
		}
	};
	return <div>{normalizedResults()}</div>;
};

export default Results;

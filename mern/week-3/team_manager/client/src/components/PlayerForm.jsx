import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlayerForm = (props) => {
	const navigate = useNavigate();
	const { initialName, handlePlayer } = props;
	const [name, setName] = useState(initialName);

	useEffect(() => {
		setName(initialName);
	}, [initialName]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		handlePlayer(name);
	};

	return (
		<div className="form">
			<form onSubmit={onSubmitHandler}>
				<label>Name</label>
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<div className="button_container">
					<button
						type="button"
						onClick={() => {
							navigate("/");
						}}
					>
						Cancel
					</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default PlayerForm;

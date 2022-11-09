import React, { useState } from "react";

const AuthorForm = (props) => {
	const { initialName, handleAuthor } = props;
	const [name, setName] = useState(initialName);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(name);
		handleAuthor(name);
	};

	return (
		<div className="form">
			<form onSubmit={onSubmitHandler}>
				<label>Name</label>
				<br />
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default AuthorForm;

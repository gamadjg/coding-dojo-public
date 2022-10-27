import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../style.css";

const UserForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const submitForm = (e) => {
		// e.preventDefault();
		// const newUser = { firstName, lastName, email, password };
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	return (
		<div className="form_container">
			<Form onSubmit={submitForm} className="form">
				<Form.Group>
					<Form.Label htmlFor="firstName">First Name</Form.Label>
					<Form.Control
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="lastName">Last Name</Form.Label>
					<Form.Control
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="password">Password</Form.Label>
					<Form.Control
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
					<Form.Control
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Form.Group>
				<Button className="form_button" type="submit">
					Submit
				</Button>
			</Form>
			<div className="form_results">
				<div>First Name: {firstName}</div>
				<div>Last Name: {lastName}</div>
				<div>Email: {email}</div>
				<div>Password: {password}</div>
				<div>Confirm Password: {confirmPassword}</div>
			</div>
		</div>
	);
};

export default UserForm;

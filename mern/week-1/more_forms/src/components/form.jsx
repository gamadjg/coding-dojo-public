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
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
	const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const formValidation = (e) => {
		if (e.target.id === "firstName") {
			setFirstName(e.target.value);
			if (e.target.value.length < 1) {
				setFirstNameError("Title is required!");
			} else if (e.target.value.length < 3) {
				setFirstNameError("Firstname must be 3 characters or longer!");
			} else {
				setFirstNameError("");
			}
		}
		if (e.target.id === "lastName") {
			setLastName(e.target.value);
			if (e.target.value.length < 1) {
				setLastNameError("Lastname is required!");
			} else if (e.target.value.length < 3) {
				setLastNameError("Lastname must be 3 characters or longer!");
			} else {
				setLastNameError("");
			}
		}
		if (e.target.id === "email") {
			setEmail(e.target.value);
			if (e.target.value.length < 1) {
				setEmailError("Email is required!");
			} else if (e.target.value.length < 5) {
				setEmailError("Email must be 5 characters or longer!");
			} else {
				setEmailError("");
			}
		}
		if (e.target.id === "password") {
			setPassword(e.target.value);
			if (e.target.value.length < 1) {
				setPasswordError("Password is required!");
			} else if (e.target.value.length < 8) {
				setPasswordError("Password must be 8 characters or longer!");
			} else {
				setPasswordError("");
			}
		}
		if (e.target.id === "confirmPassword") {
			setConfirmPassword(e.target.value);
			if (e.target.value.length < 1) {
				setConfirmPasswordError("Confirmation password is required!");
			} else if (e.target.value.length < 8) {
				setConfirmPasswordError(
					"Confirmation password must be 8 characters or longer!"
				);
			} else if (password !== e.target.value) {
				setConfirmPasswordError(
					"Confirmation password does not match password."
				);
			} else {
				setConfirmPasswordError("");
			}
		}
	};

	const submitForm = (e) => {
		e.preventDefault();

		if (
			firstNameError === "" &&
			firstName !== "" &&
			lastNameError === "" &&
			lastName !== "" &&
			emailError === "" &&
			email !== "" &&
			passwordError === "" &&
			password !== "" &&
			confirmPasswordError === "" &&
			confirmPassword !== ""
		) {
			// const newUser = { firstName, lastName, email, password };
			setHasBeenSubmitted(true);
		} else {
			console.log(hasBeenSubmitted);
		}
	};
	return (
		<div className="form_container">
			{hasBeenSubmitted ? (
				<div>Form Submitted!</div>
			) : (
				<div>
					<Form onSubmit={submitForm} className="form">
						<Form.Group>
							<Form.Label htmlFor="firstName">First Name</Form.Label>
							<Form.Control
								type="text"
								id="firstName"
								value={firstName}
								onChange={formValidation}
							/>
							{firstNameError ? (
								<p style={{ color: "red" }}>{firstNameError}</p>
							) : null}
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="lastName">Last Name</Form.Label>
							<Form.Control
								type="text"
								id="lastName"
								value={lastName}
								onChange={formValidation}
							/>
							{lastNameError ? (
								<p style={{ color: "red" }}>{lastNameError}</p>
							) : null}
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								type="text"
								id="email"
								value={email}
								onChange={formValidation}
							/>
							{emailError ? <p style={{ color: "red" }}>{emailError}</p> : null}
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="password">Password</Form.Label>
							<Form.Control
								type="password"
								id="password"
								value={password}
								onChange={formValidation}
							/>
							{passwordError ? (
								<p style={{ color: "red" }}>{passwordError}</p>
							) : null}
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="confirmPassword">
								Confirm Password
							</Form.Label>
							<Form.Control
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={formValidation}
							/>
							{confirmPasswordError ? (
								<p style={{ color: "red" }}>{confirmPasswordError}</p>
							) : null}
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
			)}
		</div>
	);
};

export default UserForm;

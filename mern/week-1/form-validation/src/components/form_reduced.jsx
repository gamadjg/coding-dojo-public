import React, { useReducer } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../style.css";
const EMAIL_REGEX = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

const initialState = {
	firstName: {
		value: "",
		error: "",
	},
	lastName: {
		value: "",
		error: "",
	},
	email: {
		value: "",
		error: "",
	},
	submit: {
		value: false,
		error: "",
	},
};

const reducer = (state, action) => {
	let error_msg = "";
	let key_value = action.type;

	switch (action.type) {
		case "firstName":
			if (action.value.length < 1) {
				error_msg = "Title is required!";
			} else if (action.value.length < 3) {
				error_msg = "Firstname must be 3 characters or longer!";
			}
			break;
		case "lastName":
			if (action.value.length < 1) {
				error_msg = "Lastname is required!";
			} else if (action.value.length < 3) {
				error_msg = "Lastname must be 3 characters or longer!";
			}
			break;
		case "email":
			if (action.value.length < 1) {
				error_msg = "Email is required!";
			} else if (action.value.length < 5) {
				error_msg = "Email must be 5 characters or longer!";
			} else if (!EMAIL_REGEX.test(action.value)) {
				error_msg = "Not a valid email address.";
			}
			break;
		case "submit":
			break;
		default:
			throw new Error();
	}
	return {
		...state,
		[key_value]: {
			...state[key_value],
			value: action.value,
			error: error_msg,
		},
	};
};

const UserForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = (e) => {
		const { id, value } = e.target;
		dispatch({
			type: id,
			value: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			state.firstName.value !== "" &&
			state.lastName.value !== "" &&
			state.email.value !== ""
		) {
			const newUser = {
				firstName: state.firstName.value,
				lastName: state.lastName.value,
				email: state.email.value,
			};
			console.log(newUser);
			dispatch({
				type: "submit",
				value: true,
			});
		}
	};

	return (
		<div className="form_container">
			{state.submit.value ? <div>Form has been submitted!</div> : null}
			<Form onSubmit={handleSubmit} className="form">
				<Form.Group>
					<Form.Label htmlFor="firstName">First Name</Form.Label>
					<Form.Control
						type="text"
						id="firstName"
						value={state.firstName.value}
						onChange={handleChange}
					/>
					{state.firstName.error ? (
						<p style={{ color: "red" }}>{state.firstName.error}</p>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="lastName">Last Name</Form.Label>
					<Form.Control
						type="text"
						id="lastName"
						name="lastName"
						value={state.lastName.value}
						onChange={handleChange}
					/>
					{state.lastName.error ? (
						<p style={{ color: "red" }}>{state.lastName.error}</p>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						type="text"
						id="email"
						value={state.email.value}
						onChange={handleChange}
					/>
					{state.email.error ? (
						<p style={{ color: "red" }}>{state.email.error}</p>
					) : null}
				</Form.Group>
				<Button className="form_button" type="submit">
					Submit
				</Button>
			</Form>
			<div className="form_results">
				<div>First Name: {state.firstName.value}</div>
				<div>Last Name: {state.lastName.value}</div>
				<div>Email: {state.email.value}</div>
			</div>
		</div>
	);
};

export default UserForm;

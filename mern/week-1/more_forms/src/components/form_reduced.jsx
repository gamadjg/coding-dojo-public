import React, { useReducer } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../style.css";

const initialState = {
	firstName: {
		value: "",
		error: null,
	},
	lastName: {
		value: "",
	},
	email: {
		value: "",
	},
	submitted: {
		value: false,
	},
};

// const initialState = {
// 	firstName: {
// 		value: "",
// 		error: null,
// 	},
// 	lastName: {
// 		value: "",
// 		error: null,
// 	},
// 	email: {
// 		value: "",
// 		error: null,
// 	},
// 	submitted: {
// 		value: false,
// 		error: null,
// 	},
// };

const reducer = (state, action) => {
	// console.log(action.type); // firstName
	// console.log(action.value); // d
	switch (action.type) {
		case "firstName":
			console.log("test");
			/* WORKS
			let new_state = { ...state };
			console.log(JSON.stringify(new_state));
			new_state.firstName.value = action.value;
			return new_state;
			*/

			/* ALSO WORKS
			let key_value = action.type;
			let new_state = { ...state };
			console.log((new_state[key_value].value = action.value));
			console.log(new_state);
			return new_state
			*/
			let key_value = action.type;
			console.log(...state[key_value].value);
			return {
				...state,
				[key_value]: { ...state[key_value], value: action.value },
			};
		// console.log(new_state);
		// console.log((new_state[key_value].value = action.value));
		// console.log(new_state);
		case "lastName":
			console.log("test");
			console.log(action.type);
			return { ...state, [action.type]: action.value };
		default:
			throw new Error();
	}
	// return { ...state, [action.type]: action.payload };
};

const UserForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = (e) => {
		const { id, value } = e.target;
		console.log(id, value); // firstName d
		dispatch({
			type: id, // firstname
			value: value, // David
		});
	};

	const submitForm = (e) => {
		e.preventDefault();

		if (
			// firstNameError === "" &&
			state.firstName.value !== "" &&
			// lastNameError === "" &&
			state.lastName.value !== ""
			// emailError === "" &&
			// email !== "" &&
			// passwordError === "" &&
			// password !== "" &&
			// confirmPasswordError === "" &&
			// confirmPassword !== ""
		) {
			// const newUser = { firstName, lastName, email, password };
			// setHasBeenSubmitted(true);
		} else {
			// console.log(hasBeenSubmitted);
		}
	};
	// console.log(state.submitted.value);

	return (
		<div className="form_container">
			<Form onSubmit={submitForm} className="form">
				<Form.Group>
					<Form.Label htmlFor="firstName">First Name</Form.Label>
					<Form.Control
						type="text"
						id="firstName"
						value={state.firstName.value}
						onChange={handleChange}
					/>
					{/* {firstNameError ? (
							<p style={{ color: "red" }}>{firstNameError}</p>
						) : null} */}
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
					{/* {lastNameError ? (
							<p style={{ color: "red" }}>{lastNameError}</p>
						) : null} */}
				</Form.Group>
				{/* <Form.Group>
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
					</Form.Group> */}
				<Button className="form_button" type="submit">
					Submit
				</Button>
			</Form>
			<div className="form_results">
				<div>First Name: {state.firstName.value}</div>
				<div>Last Name: {state.lastName.value}</div>
			</div>
		</div>
	);
};

export default UserForm;

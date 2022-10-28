import { useState } from "react";

const formHook = (formValues) => {
	const [values, setValues] = useState(formValues);
	console.log(values);
	const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const handleChange = (e) => {
		if (e.target.id == "firstName") {
			setFirstName(e.target.value);
			if (e.target.value.length < 1) {
				setFirstNameError("Firstname is required!");
			} else if (e.target.value.length < 3) {
				setFirstNameError("Firstname must be 3 characters or longer!");
			} else {
				setFirstNameError("");
			}
		}
		if (e.target.id == "lastName") {
			setLastName(e.target.value);
			if (e.target.value.length < 1) {
				setLastNameError("Lastname is required!");
			} else if (e.target.value.length < 3) {
				setLastNameError("Lastname must be 3 characters or longer!");
			} else {
				setLastNameError("");
			}
		}
		if (e.target.id == "email") {
			setEmail(e.target.value);
			if (e.target.value.length < 1) {
				setEmailError("Email is required!");
			} else if (e.target.value.length < 5) {
				setEmailError("Email must be 3 characters or longer!");
			} else {
				setEmailError("");
			}
		}
		if (e.target.id == "password") {
			setPassword(e.target.value);
			if (e.target.value.length < 1) {
				setPasswordError("Password is required!");
			} else if (e.target.value.length < 8) {
				setPasswordError("Password must be 3 characters or longer!");
			} else {
				setPasswordError("");
			}
		}
		if (e.target.id == "confirmPassword") {
			setConfirmPassword(e.target.value);
			if (e.target.value.length < 1) {
				setConfirmPasswordError("Confirmation password is required!");
			} else if (e.target.value.length < 8) {
				setConfirmPasswordError(
					"Confirmation password must be 3 characters or longer!"
				);
			}
			// else if (password != e.target.value) {
			// 	setConfirmPasswordError(
			// 		"Confirmation password does not match password."
			// 	);
			// }
			else {
				setConfirmPasswordError("");
			}
		}
	};
};

// const formValidation = (e) => {
// 	if (e.target.id == "firstName") {
// 		return setFirstName(e.target.value);
// 		if (e.target.value.length < 1) {
// 			return setFirstNameError("Title is required!");
// 		} else if (e.target.value.length < 3) {
// 			return setFirstNameError("Firstname must be 3 characters or longer!");
// 		} else {
// 			return setFirstNameError("");
// 		}
// 	}
// 	if (e.target.id == "lastName") {
// 		return setLastName(e.target.value);
// 		if (e.target.value.length < 1) {
// 			return setLastNameError("Lastname is required!");
// 		} else if (e.target.value.length < 3) {
// 			return setLastNameError("Lastname must be 3 characters or longer!");
// 		} else {
// 			return setLastNameError("");
// 		}
// 	}
// 	if (e.target.id == "email") {
// 		return setEmail(e.target.value);
// 		if (e.target.value.length < 1) {
// 			return setEmailError("Email is required!");
// 		} else if (e.target.value.length < 5) {
// 			return setEmailError("Email must be 3 characters or longer!");
// 		} else {
// 			return setEmailError("");
// 		}
// 	}
// 	if (e.target.id == "password") {
// 		return setPassword(e.target.value);
// 		if (e.target.value.length < 1) {
// 			return setPasswordError("Password is required!");
// 		} else if (e.target.value.length < 8) {
// 			return setPasswordError("Password must be 3 characters or longer!");
// 		} else {
// 			return setPasswordError("");
// 		}
// 	}
// 	if (e.target.id == "confirmPassword") {
// 		return setConfirmPassword(e.target.value);
// 		if (e.target.value.length < 1) {
// 			return setConfirmPasswordError("Confirmation password is required!");
// 		} else if (e.target.value.length < 8) {
// 			return setConfirmPasswordError(
// 				"Confirmation password must be 3 characters or longer!"
// 			);
// 		} else if (password != e.target.value) {
// 			return setConfirmPasswordError(
// 				"Confirmation password does not match password."
// 			);
// 		} else {
// 			return setConfirmPasswordError("");
// 		}
// 	}
// };

export default formHook;

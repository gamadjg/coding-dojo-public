import React, { useReducer } from "react";
const initialState = {};

const reducer = (state, action) => {
	// if new item, add to list
	// if complete checkbox, set item as complete
};

const ItemList = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = (e) => {
		// dispatch({
		// 	type: id, // firstname
		// 	value: value, // David
		// });
	};

	const handleSubmit = (e) => {};

	return <div className="main">test</div>;
};

export default ItemList;

import React from "react";
import "../box_generator.css";

const BoxGenerator = (props) => {
	let box_list = props.messages;

	if (box_list.length !== 0) {
		box_list = box_list.map((value, id) => (
			<div key={id} className="box" style={{ backgroundColor: value }}></div>
		));
	}

	return <div className="box_container">{box_list}</div>;
};

export default BoxGenerator;

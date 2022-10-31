import "./App.css";
import BoxForm from "./components/box_form";
import BoxGenerator from "./components/box_generator";

import React, { useState } from "react";
function App() {
	const [msgCache, setMsgCache] = useState([]);

	const handleNewMsg = (message) => {
		const msgArr = [...msgCache, message];
		setMsgCache(msgArr);
		// console.log(msgArr);
	};

	return (
		<div className="App">
			<BoxForm handleNewMsg={handleNewMsg} />
			<BoxGenerator messages={msgCache} />
		</div>
	);
}

export default App;
